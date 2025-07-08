import { useContext } from "react";
import NavBar from "../Navbar";
import { counterInfo, themeInfo } from "../Navigations/NavigateComp";

const SettingsScreen = () => {
  const {themeActions}=useContext(themeInfo)
  const {counter, CounterActions}=useContext(counterInfo)

  const themeHandler=()=>{
    themeActions()
  }

  const counterHandler=()=>{
    CounterActions()
  }

  return (
    <>
      <NavBar />
      <h3>Settings Screen</h3>
      <button onClick={themeHandler}>Click to enable/disble darkMode theme</button>
      <h4>Counter Value {counter}</h4>
      <button onClick={counterHandler}>Counter Handler</button>

    </>
  );
};

export default SettingsScreen;
