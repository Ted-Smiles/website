import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let location = useLocation();

    console.log(location)

    let titleAtTop = true

    if (location.pathname === "/" || location.pathname === "/contact/" || location.pathname === "/contact") {
        titleAtTop = false
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header">
            {titleAtTop ? (
                        <div className="title">
                            <h1>Lorraine Penchion</h1>
                        </div>
            ) : null
        }
            <div className="button-menu">

                <button className="burger-menu" onClick={toggleMenu}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <div className={`overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
                <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
                    <div className="small-links">
                        <Link to="/" onClick={closeMenu} >Home</Link>
                        <Link to="/gallery/" onClick={closeMenu}>Gallery</Link>
                        <Link to="/about/" onClick={closeMenu}>About</Link>
                        <Link to="/contact/" onClick={closeMenu}>Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
