import { useContext } from "react";
import Navbar2 from "../Navbar2";
import { AllData } from "../Navigate2";

const HomeScreen2 = () => {
  const { currectState } = useContext(AllData);
  return (
    <>
      <Navbar2 />
      <h3>Counter {currectState.counter}</h3>
      <h4>{currectState.name}</h4>
      <ol>
        {currectState.subjects.map((subject, index) => {
          return <li key={index}>{subject}</li>;
        })}
      </ol>
    </>
  );
};
export default HomeScreen2;
