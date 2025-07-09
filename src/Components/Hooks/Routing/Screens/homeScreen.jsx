import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Navbar";
import axios from "axios";
import { CheckArrayLengthExists } from "../../Utills/jsFuncts";
import { Link } from "react-router-dom";
import { cartInfo } from "../Navigations/NavigateComp";

const HomeScreen = () => {
  const [productsList, setProductsList] = useState([]);
  const { cartProducts, cartAction } = useContext(cartInfo);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProductsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addingProductToCart = (id) => {
    cartAction(id);
    console.log(cartProducts);
  };

  return (
    <>
      <NavBar />
      <h3>Home Screen</h3>
      {CheckArrayLengthExists(productsList) ? (
        <h3>Products Loading..........</h3>
      ) : (
        productsList.map((eachProduct) => {
          const { id, title, image } = eachProduct;
          return (
            <React.Fragment key={id}>
              <h3>{title}</h3>
              <img src={image} height={250} width={250} />
              <button>
                <Link to={`/product/${id}`}>
                  Click to view ProductDetailPage
                </Link>
              </button>
              <button onClick={() => addingProductToCart(id)}>
                Add to cart
              </button>
            </React.Fragment>
          );
        })
      )}
    </>
  );
};

export default HomeScreen;
