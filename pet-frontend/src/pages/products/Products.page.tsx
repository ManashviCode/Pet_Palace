import { useState, useEffect } from "react";
import "./Products.scss";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant.ts";
import { IProduct } from "../../types/global.typing";
import React from "react";
import moment from "moment";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const location = useLocation();
  const redirect = useNavigate();

  console.log(location);
  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl);
      setProducts(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: location?.state?.message,
        });
        redirect(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("An Error Happend");
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);


  return (
    <div className="products">
      <h1>Products List</h1>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Creation Time</th>
                <th>Update Time</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{moment(product.createdAt).fromNow()}</td>
                  <td>{moment(product.updatedAt).fromNow()}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ mx: 3 }}
                      
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                    
                    >
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
