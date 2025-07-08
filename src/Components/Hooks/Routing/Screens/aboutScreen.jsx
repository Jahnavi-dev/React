import { useContext } from "react";
import NavBar from "../Navbar";
import { counterInfo } from "../Navigations/NavigateComp";

const AboutScreen = () => {
  const {counter}=useContext(counterInfo)
  return (
    <>
      <NavBar />
      <h3>About Screen</h3>
      <h4>Counter Value {counter}</h4>
    </>
  );
};

export default AboutScreen;
