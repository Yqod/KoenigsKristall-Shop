import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <img className="headerLogo" src="https://raw.githubusercontent.com/DevTides/react-hooks-course/main/src/assets/logo.png" alt="logo" />
            <h1 className="websiteTitle">Koenigskristall</h1>
            <nav className="navHeader">
                <Link  to="/" className="Startseite">Startseite</Link> |{" "}
                <Link to="/shop" className="Shop">Shop</Link> |{" "}
                <Link to="/about" className="About">Über mich</Link> |{" "}
                <Link to="/info" className="Info">Info</Link>
            </nav>
        </header>
    )
}

export default Header;