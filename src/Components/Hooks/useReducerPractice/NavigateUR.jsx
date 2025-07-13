import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreenUR from "./HomeScreenUR";
import OutputScreenUR from "./OutputScreenUR";
import { createContext, useReducer } from "react";

export const CounterInfo=createContext()

export const initialState={counter:0}

const reducerFun=(state, action)=>{
    switch (action.type) {
        case "INCREMENT_ACTION":
            return {...state, counter:state.counter+1}
        case "DECREMENT_ACTION":
            if(state.counter>0){
                return {...state, counter:state.counter-1}
            }
            else{
                return state;
            } 
        case "RESET_ACTION":
            return {...state, counter:0}  
        default:
            break;
    }

}


const NavigateUR=()=>{
    const [currentState, dispatchFun]=useReducer(reducerFun, initialState);

    const incrementAC=()=>{
        dispatchFun({type:"INCREMENT_ACTION"})
    }

    const decrementAC=()=>{
        dispatchFun({type:"DECREMENT_ACTION"})
    }

    const resetAC=()=>{
        dispatchFun({type:"RESET_ACTION"})
    }

    return(
        <>
        <CounterInfo.Provider value={{currentState, incrementAC, decrementAC, resetAC}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreenUR}/>
            <Route path="/OutputScreenUR" Component={OutputScreenUR}/>
        </Routes>
        </BrowserRouter>
        </CounterInfo.Provider>
        </>
    )
}

export default NavigateUR;