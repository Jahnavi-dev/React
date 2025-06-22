import BtnComp from "./Components/BtnComp";
import GreetComp from "./Components/GreetComp";

const App=()=>{
  const btnProperties=[
    {btnText:"Red", bgColor:"Red", width:100, height:100, color:"white"},
    {btnText:"Orange", bgColor:"Orange", width:100, height:100, color:"yellow"},
    {btnText:"Green", bgColor:"Green", width:100, height:100, color:"white"}
  ];
  return(
    <>
    {/* <BtnComp btnText={"Red"} bgColor={"Red"} btnProperties={{width:100,height:100}}/>
    <BtnComp btnText={"Orange"} bgColor={"Orange"} btnProperties={{width:100,height:100}}/>
    <BtnComp btnText={"Green"} bgColor={"green"} btnProperties={{width:100,height:100}}/> */}
    {
      btnProperties.map((eachBtnPrp, index)=>{
        const {btnText, bgColor, width, height, color}=eachBtnPrp;
        return(
          <BtnComp key={index+1} btnText={btnText} bgColor={bgColor} btnProperties={{width:width,height:height}} color={color}></BtnComp>
        )
      }
      )
    }
    <GreetComp>
      <h1>I am Fine</h1>
      <h1>What about u</h1>
    </GreetComp>
    </>
  )
}

export default App;
