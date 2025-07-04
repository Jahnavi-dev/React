import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav className="navbar navbar-expand-sm">
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
