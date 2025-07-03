import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutScreen from "../Screens/aboutScreen";
import HomeScreen from "../Screens/homeScreen";
import SettingsScreen from "../Screens/settingsScreen";
import ContactScreen from "../Screens/contactScreen";
import InvalidScreen from "../Screens/invalidScreen";

const NavigateComp=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/About" Component={AboutScreen}/>
            <Route path="/Settings" Component={SettingsScreen}/>
            <Route path="/Contact" Component={ContactScreen}/>
            <Route path="*" Component={InvalidScreen}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigateComp;