import { Link, useNavigate } from "react-router-dom";

const InvalidScreen = () => {
  const navigate = useNavigate();
  const userActionToHomeScreen = () => {
    // navigate("/");

    const giveAcess = true;
    if (giveAcess) {
      navigate("/");
    }
  };
  return (
    <>
      <h3>Hey came out of Page</h3>
      {/* <button><Link to={"/"}>go to HomeScreen</Link></button> */}
      <button onClick={userActionToHomeScreen}>go to HomeScreen</button>
    </>
  );
};
export default InvalidScreen;
