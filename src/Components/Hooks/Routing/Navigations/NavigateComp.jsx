import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "../Screens/aboutScreen";
import HomeScreen from "../Screens/homeScreen";
import SettingsScreen from "../Screens/settingsScreen";
import ContactScreen from "../Screens/contactScreen";
import InvalidScreen from "../Screens/invalidScreen";
import ProductDetailPage from "../Screens/productDetails";

const NavigateComp = () => {
  return (
    <>
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
    </>
  );
};
export default NavigateComp;
