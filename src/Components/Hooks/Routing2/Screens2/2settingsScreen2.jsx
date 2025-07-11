import { useContext } from "react";
import Navbar2 from "../Navbar2";
import { AllData } from "../Navigate2";

const SettingsScreen2 = () => {
  const { currectState, handleIncre, changeName, addSubjects } =
    useContext(AllData);
  return (
    <>
      <Navbar2 />
      <h3>Counter {currectState.counter}</h3>
      <button onClick={() => handleIncre(5)}>Increment_Counter</button>
      <button onClick={changeName}>change_name</button>
      <button onClick={addSubjects}>Add_Subjects</button>
    </>
  );
};
export default SettingsScreen2;
