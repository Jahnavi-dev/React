import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartInfo } from "./Navigations/NavigateComp";

const NavBar = () => {
  const { cartProducts } = useContext(cartInfo);
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to={"/"} style={linkStyle}>
              Home
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
              Contact
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/Cart"} style={linkStyle}>
              Cart
            </Link>
            {cartProducts.length > 0 && cartProducts.length}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
