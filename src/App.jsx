import NavigateComp from "./Components/Hooks/Routing/Navigations/NavigateComp";
import Navigate2Comp from "./Components/Hooks/Routing2/Navigate2";
import NavigateUR from "./Components/Hooks/useReducerPractice/NavigateUR";
import CrudComp from "./Components/VretaTask/Crud";

const App = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
      {/* <NavigateComp /> */}
      {/* <Navigate2Comp/> */}
      {/* <NavigateUR/> */}
      <CrudComp/>
    </div>
    </>
  );
};

export default App;
