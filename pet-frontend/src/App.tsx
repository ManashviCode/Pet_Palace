import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/Home.page.tsx";
import Products from "./pages/products/Products.page.tsx";
import AddProduct from "./pages/add-product/AddProduct.page.tsx";
import EditProduct from "./pages/edit-product/EditProduct.page.tsx";
import DeleteProduct from "./pages/delete-product/DeleteProduct.page.tsx";

const App: React.FC = () => {
  return (
    <div>
      {/*navbar */}
      <Navbar />

      {/*wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="delete/:id" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
