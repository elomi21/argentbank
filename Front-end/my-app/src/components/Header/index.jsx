import { NavLink } from "react-router-dom";
import Logobank from "../../assets/argentBankLogo.webp";

function Header() {
  return (
      <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={Logobank}
            alt="logo argent bank"
            className="main-nav-logo-image"
          />
        </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <NavLink className="main-nav-item" to="/Connect">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
