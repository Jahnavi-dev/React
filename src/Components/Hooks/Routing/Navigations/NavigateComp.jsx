import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "../Screens/aboutScreen";
import HomeScreen from "../Screens/homeScreen";
import SettingsScreen from "../Screens/settingsScreen";
import ContactScreen from "../Screens/contactScreen";
import InvalidScreen from "../Screens/invalidScreen";
import ProductDetailPage from "../Screens/productDetails";
import { useState } from "react";
import { createContext } from "react";


export const userInfo=createContext()
export const themeInfo=createContext()
export const counterInfo=createContext()
const NavigateComp = () => {
  const [userName, setUserName]=useState("Ram")
  const [darkMode, setDarkMode]=useState(false)
  const [counter, setCounter]=useState(0)
  

  const themeActions=()=>{
    setDarkMode(!darkMode)
  }

  const CounterActions=(value=1)=>{
    setCounter(counter+value)
  }

  return (
    <>
    <userInfo.Provider value={userName}>
    <themeInfo.Provider value={{darkMode, themeActions}}>
    <counterInfo.Provider value={{counter, CounterActions}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/About" Component={AboutScreen} />
          <Route path="/Settings" Component={SettingsScreen} />
          <Route path="/Contact" Component={ContactScreen} />
          <Route path="/product/:productId" Component={ProductDetailPage} />
          <Route path="*" Component={InvalidScreen} />
        </Routes>
      </BrowserRouter>
    </counterInfo.Provider>
    </themeInfo.Provider>
    </userInfo.Provider>
    </>
  );
};
export default NavigateComp;
