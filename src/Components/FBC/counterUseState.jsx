import { useState } from "react";
import CounterBtns from "./counterBtns";
import "./counterStyle.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [subscribe, setSubscribe] = useState(false);

  const Action = (action) => {
    switch (action) {
      case "Increment":
        setCount(count + 1);
        break;
      case "Decrement":
        if (count > 0) {
          setCount(count - 1);
        }
        break;
      case "Reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  const subscribeAction = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div className="main_Body">
      <div className="main_Cont">
        {subscribe ? (
          <>
            <div>
              <h2>Counter</h2>
              <h2 className="counter_Value">{count}</h2>
            </div>
            {/* <button onClick={() => Action("Increment")}>Increment</button>
            <button onClick={() => Action("Decrement")}>Decrement</button>
            <button onClick={() => Action("Reset")}>Reset</button> */}
            <div className="btn_Cont">
              <CounterBtns onPress={() => Action("Increment")}>
                Increment
              </CounterBtns>
              {/* here actually sir used onclick but i am wheather it will work or not by changing it to onPress */}
              <CounterBtns onPress={() => Action("Decrement")}>
                Decrement
              </CounterBtns>
              <CounterBtns onPress={() => Action("Reset")}>Reset</CounterBtns>
            </div>
            <CounterBtns onPress={subscribeAction}>
              {subscribe ? "unSubscribe" : "Subscribe"}
            </CounterBtns>
          </>
        ) : (
          <CounterBtns onPress={subscribeAction}>
            {subscribe ? "unSubscribe" : "Subscribe"}
          </CounterBtns>
        )}
      </div>
    </div>
  );
};
export default Counter;
