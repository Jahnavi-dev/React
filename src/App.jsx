import MainHeadingComp from "./Components/CBComp/mainHeading";
import "./Components/CBComp/mainHeading.css"
import CardComp from "./Components/FBComp/card";
import NavbarComp from "./Components/FBComp/navbar";
import { ReactSpinnerComp } from "./Components/FBComp/reactSpinner";
import TableComp from "./Components/FBComp/table";


const App=()=>{
  return(
    <>
    <MainHeadingComp/>
    <NavbarComp/>
    <TableComp/>
    <CardComp/>
    <ReactSpinnerComp/>
    </>
  )
}

export default App;
