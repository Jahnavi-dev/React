import { Link } from "react-router-dom";

const Navbar2 = () => {
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
              HomeScreen2
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/SettingScreen2"} style={linkStyle}>
              SettingsScreen2
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to={"/OutputScreen2"} style={linkStyle}>
              OutputScreen2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
