import "./home.scss";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import petImage from "../../assets/images/pet.png";

const Home = () => {
  const redirect = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to Pet Palace</h1>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => redirect("/products")}
      >
        Product List
      </Button>
      <img src={petImage} alt="pet" />
    </div>
  );
};

export default Home;
