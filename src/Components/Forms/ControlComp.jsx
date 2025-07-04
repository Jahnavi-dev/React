import axios from "axios";
import { useState } from "react";

const ControlComp = () => {
  const [userNameState, setUserName] = useState("");
  const [passwordState, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [successInfo, setSuccessInfo] = useState(null);
  const [failureInfo, setFailureInfo] = useState(null);

  const userNameHandler = (event) => {
    const userName = event.target.value;
    // console.log(userName);
    setUserName(userName);
    if (userName.length > 10) {
      setUserNameError("Please enter less than 10 characters");
    } else {
      setUserNameError(null);
    }
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    // console.log(password);
    setPassword(password);
    if (password.length > 10) {
      setPasswordError("Please enter less than 10 characters");
    } else {
      setPasswordError(null);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    serverCall();
  };

  const serverCall = async () => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: userNameState,
        password: passwordState,
      });

      if (res.status === 200) {
        console.log(res);
        console.log(res.data);
        success();
      }
    } catch (error) {
      // error is thrown, so you must catch it
      console.log("Login failed");
      failure(error.response);
    }
    // const response = await fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userInfo),
    // });
    // console.log(response);
  };

  const success = () => {
    console.log("Login Successful");
    setSuccessInfo("Login data successfully");
  };

  const failure = (res) => {
    console.log(res.data.message);
    setSuccessInfo(false);
    setFailureInfo(res.data.message);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          value={userNameState}
          onChange={userNameHandler}
        />
        <br />
        {userNameError && <span style={{ color: "red" }}>{userNameError}</span>}
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={passwordState}
          onChange={passwordHandler}
        />
        <br />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
        <br />
        {!userNameError && !passwordError && (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
      {successInfo ? <h2>{successInfo}</h2> : <h2>{failureInfo}</h2>}
    </>
  );
};

export default ControlComp;
