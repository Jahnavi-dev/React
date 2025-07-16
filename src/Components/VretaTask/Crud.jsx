import { useState } from "react";
import "./Crud.css";

const CrudComp = () => {
  const [employeeData, setEmployeeData] = useState(["Ramesh", "Anjali"]);
  const [value, setValue] = useState("");

  const AddAction = () => {
    console.log(value);
    console.log(employeeData);
    setEmployeeData([...employeeData, value]);
    setValue("");
  };

  const deleteAction = (employid) => {
    console.log(employid);
    const filterData = employeeData.filter((eachEmployee, id) => {
      if (id != employid) {
        return eachEmployee;
      }
    });
    setEmployeeData(filterData);
    setValue("");
  };

  const updateAction = (employid) => {
    console.log(employid);
    const updateData = employeeData.map((eachEmployee, id) => {
      if (id === employid) {
        return value;
      } else {
        return eachEmployee;
      }
    });
    setEmployeeData(updateData);
    setValue("");
  };

  return (
    <>
      <div className="main_container">
        <h3 style={{ textAlign: "center" }}>Employee Data</h3>
        <div className="input_Cont">
          <label htmlFor="myInput">Enter Employee Name :&nbsp;</label>
          <input
            type="text"
            id="myInput"
            value={value}
            style={{borderRadius:"3px"}}
            onChange={(e) => setValue(e.target.value)}
          />
          <button style={{ marginLeft: "10px", borderRadius: "8px"}} onClick={AddAction}>
            Add
          </button>
        </div>
        <div className="crud_main_cont">
          {employeeData.map((eachEmployee, id) => {
            return (
              <div key={id} className="crud_sub_cont">
                <h5>{id+1} . {eachEmployee}</h5>
                <button style={{borderRadius: "8px"}}onClick={() => updateAction(id)}>Update</button>
                <button style={{borderRadius: "8px"}} onClick={() => deleteAction(id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CrudComp;
