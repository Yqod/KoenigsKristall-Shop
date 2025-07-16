import { Link } from "react-router-dom";

function Header({ cartCount, onCartClick }) {
    return(
        <header className="header">
            <img className="headerLogo" src="https://raw.githubusercontent.com/DevTides/react-hooks-course/main/src/assets/logo.png" alt="logo" />
            <h1 className="websiteTitle">Koenigskristall</h1>
            <nav className="navHeader">
                <Link  to="/" className="Startseite">Startseite</Link> {" "}
                <Link to="/shop" className="Shop">Shop</Link> {" "}
                <Link to="/about" className="About">Über mich</Link> {" "}
                <Link to="/info" className="Info">Bibliothek</Link>
                 {cartCount > 0 && (
          <span
            className="cartIcon"
            style={{ marginLeft: "20px", cursor: "pointer" }}
            onClick={onCartClick}
            title="Warenkorb anzeigen"
          >
            🛒
            <span className="cartCount">{cartCount}</span>
          </span>
        )}
            </nav>
        </header>
    )
}

export default Header;