import { useContext } from "react";
import { CounterInfo } from "./NavigateUR";

const HomeScreenUR=()=>{
    const {currentState}=useContext(CounterInfo);
    return(
        <>
        <h4>HomeScreenUR</h4>
        <h4>Counter</h4>
        <h5>{currentState.counter}</h5>
        </>
    )
}

export default HomeScreenUR;