import { React } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section className="outside__header__wrapper m-0 p-0">
    <Link to="/">
      <img
        src="../../img/PC_LogoHeader_Home.png"
        alt="Home Logo"
        className="outside__header__logo"
      />
    </Link>
    <Link to="/Cart/Cart">
      <img
        src="/img/Cart_Button_main.png"
        alt="Cart Button"
        className="outside__header__cart"
      />
    </Link>
  </section>
  <header className="w-100 m-0 p-0">
    <nav className="navbar navbar-expand-md navbar-inverse m-0 p-0">
      <div className="inside__header__wrapper p-0" id="toggleDisplay">
        <Link className="inside__header__logo m-0 p-0" to="/">
          <img src="../../img/PC_LogoHeader_Home.png" alt="Logo Header" />
        </Link>
        <Link className="inside__header__cart" to="/Cart/Cart">
          <img src="/img/Cart_Button_main.png" alt="Logo Header" />
        </Link>
      </div>
      <div className="toggler__wrapper p-0">
        <button className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse" style={{"backgroundColor": "#22190f"}}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar1"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar__nav__divider__top"></div>
        <div className="navbar__nav__divider__bottom"></div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/About">About<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Shop/Products">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Recipes">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
        </>
    )
}

export default Header;