import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import axios from "axios";
import { CheckArrayLengthExists } from "../../Utills/jsFuncts";

const HomeScreen = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleMouseMove = (event) => {
    console.log(event);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProductsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <h3>Home Screen</h3>
      {CheckArrayLengthExists(productsList) ? (
        <h3>Products Loading..........</h3>
      ) : (
        productsList.map((eachProduct) => {
          const { id, title } = eachProduct;
          return (
            <React.Fragment key={id}>
              <h3>{title}</h3>
            </React.Fragment>
          );
        })
      )}
    </>
  );
};

export default HomeScreen;
