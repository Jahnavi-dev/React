import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "../Screens/aboutScreen";
import HomeScreen from "../Screens/homeScreen";
import SettingsScreen from "../Screens/settingsScreen";
import ContactScreen from "../Screens/contactScreen";
import InvalidScreen from "../Screens/invalidScreen";
import ProductDetailPage from "../Screens/productDetails";
import AddToCartScreen from "../Screens/addToCartScreen";
import { createContext, useState } from "react";
import axios from "axios";

export const cartInfo = createContext();
const NavigateComp = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const cartAction = async (idNo) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${idNo}`);
    console.log(res.data);
    const { id, title, image } = res.data;
    const productData = { id, title, image };
    console.log(productData);
    setCartProducts((cartProducts) => [...cartProducts, productData]);
    console.log(cartProducts);
  };

  const cartActionRemove = (idNo) => {
    const filterCartProducts = cartProducts.filter((eachProduct) => {
      if (eachProduct.id !== idNo) {
        return eachProduct;
      }
    });
    setCartProducts(filterCartProducts);
  };

  return (
    <>
      <cartInfo.Provider value={{ cartProducts, cartAction, cartActionRemove }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/About" Component={AboutScreen} />
            <Route path="/Settings" Component={SettingsScreen} />
            <Route path="/Contact" Component={ContactScreen} />
            <Route path="/Cart" Component={AddToCartScreen} />
            <Route path="/product/:productId" Component={ProductDetailPage} />
            <Route path="*" Component={InvalidScreen} />
          </Routes>
        </BrowserRouter>
      </cartInfo.Provider>
    </>
  );
};
export default NavigateComp;
