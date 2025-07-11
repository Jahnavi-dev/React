import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen2 from "./Screens2/1homeScreen2";
import SettingsScreen2 from "./Screens2/2settingsScreen2";
import OutputScreen2 from "./Screens2/3outputScreen2";
import DynamicScreen2 from "./Screens2/4dynamicScreen";
import InvalidScreen2 from "./Screens2/5invalidScreen2";
import { createContext, useReducer } from "react";

export const AllData = createContext();

const initialState = {
  counter: 0,
  name: "Roja",
  subjects: ["JS", "ReactJS", "NodeJS"],
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "INCREMENT_ACTION":
      return { ...state, counter: state.counter + action.payLoad };
    case "CHANGE_ACTION":
      return { ...state, name: "Raja" };
    case "SUBJECTS_ACTION":
      return {
        ...state,
        subjects: [...state.subjects, "ThreeJS", "EmberJS", "VueJS"],
      };
    default:
      break;
  }
};

const Navigate2Comp = () => {
  const [currectState, dispatch] = useReducer(reducerFun, initialState);

  const handleIncre = (value) => {
    dispatch({ type: "INCREMENT_ACTION", payLoad: value });
  };

  const changeName = () => {
    dispatch({ type: "CHANGE_ACTION" });
  };

  const addSubjects = () => {
    dispatch({ type: "SUBJECTS_ACTION" });
  };

  return (
    <>
      <AllData.Provider
        value={{ currectState, handleIncre, changeName, addSubjects }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomeScreen2} />
            <Route path="/SettingScreen2" Component={SettingsScreen2} />
            <Route path="/OutputScreen2" Component={OutputScreen2} />
            <Route path="/DynamicScreen2/:id" Component={DynamicScreen2} />
            <Route path="*" Component={InvalidScreen2} />
          </Routes>
        </BrowserRouter>
      </AllData.Provider>
    </>
  );
};
export default Navigate2Comp;
