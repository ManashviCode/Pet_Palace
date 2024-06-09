import { useState, useEffect } from "react";
import "./Products.scss";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant.ts";
import { IProduct } from "../../types/global.typing";
import React from "react";


const Products: React.FC = () => {
   const [products, setProducts] = useState<IProduct[]>([]);
  

   const fetchProductsList = async () => {
      try {
         const response = await axios.get<IProduct[]>(baseUrl);
         setProducts(response.data);
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
        
      </div>
   );
};

export default Products;