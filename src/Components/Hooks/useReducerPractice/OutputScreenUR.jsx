import { useContext} from "react";
import { CounterInfo } from "./NavigateUR";

const OutputScreenUR=()=>{
    const {currentState, incrementAC, decrementAC, resetAC}=useContext(CounterInfo);
    return(
        <>
        <h4>OutputScreenUR</h4>
        <h4>Counter</h4>
        <h5>{currentState.counter}</h5>
        <button style={{margin:"10px"}} onClick={incrementAC}>increment</button>
        <button style={{margin:"10px"}} onClick={resetAC}>reset</button>
        <button style={{margin:"10px"}} onClick={decrementAC}>decrement</button>
        </>
    )
}

export default OutputScreenUR;