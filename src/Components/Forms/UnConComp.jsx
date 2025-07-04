import { useRef, useState } from "react";

const UnConComp = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [userNameError, setUserNameError] = useState(null);
  const submitAction = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log(userName);
    console.log(password);
    if (userName.length < 6 || password.length < 6) {
      // alert("please enter more than 6 Characters");
      setUserNameError(true);
    } else {
      // alert("Form Submitted Successfully");
      setUserNameError(false);
    }
  };

  return (
    <>
      <form onSubmit={submitAction}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" ref={userNameRef} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" ref={passwordRef} />
        <br />
        {/* {userNameError?<span style={{color:"red"}}>please enter more than 6 Characters</span> : (userNameError===false) &&<span style={{color:"green"}}>Form submitted Successfully</span>} */}
        {userNameError ? (
          <span style={{ color: "red" }}>please enter correct Data</span>
        ) : (
          userNameError === false && (
            <span style={{ color: "green" }}>Form submitted Successfully</span>
          )
        )}
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default UnConComp;
