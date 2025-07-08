import { useContext } from "react";
import { Link } from "react-router-dom";
import { counterInfo, themeInfo, userInfo } from "./Navigations/NavigateComp";

const NavBar = () => {
  const userName=useContext(userInfo)
  // console.log(userName);
  const {darkMode}=useContext(themeInfo)
  const {counter}=useContext(counterInfo)
  
  const linkStyle = {
    textDecoration: "none",
    color: darkMode?"white":"black",
  };
  return (
    <nav className={darkMode?"navbar navbar-expand-lg navbar-light bg-dark":"navbar navbar-expand-lg navbar-light bg-light"}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to={"/"} style={linkStyle}>
              Home {userName}
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/About"} style={linkStyle}>
              About
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/Settings"} style={linkStyle}>
              Settings
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/Contact"} style={linkStyle}>
              Contact{counter}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
