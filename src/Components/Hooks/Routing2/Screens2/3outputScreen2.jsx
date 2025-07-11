import { useContext, useMemo, useState } from "react";
import Navbar2 from "../Navbar2";
import { AllData } from "../Navigate2";

const OutputScreen2 = () => {
  const { currectState, handleIncre } = useContext(AllData);
  const [counter2, setCounter2] = useState(0);

  const count2Incre = () => {
    setCounter2(counter2 + 1);
  };

  const checkCounter1 = useMemo(() => {
    console.log("check");
    return currectState.counter % 2 === 0 ? "TRUE" : "FALSE";
  }, [currectState.counter]);

  return (
    <>
      <Navbar2 />
      <h3>useMemo</h3>
      <h4>
        counter 1 :{currectState.counter} {checkCounter1}
      </h4>
      <h4>counter 2 :{counter2}</h4>
      <br />
      <button onClick={() => handleIncre(5)}>counter1Increment</button>
      <br />
      <br />
      <button onClick={() => count2Incre(10)}>counter2Increment</button>
    </>
  );
};
export default OutputScreen2;
