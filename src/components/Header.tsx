import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import logoSvg from '../img/spaceshipLogo.svg';

function Header() {
    const location = useLocation();
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Spaceship logo"/>
                        <div>
                            <h1>Spaceship Store</h1>
                            <p>Лучшие корабли во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__buttons">
                    {location.pathname !== '/cart' && (
                        <Link to="/cart" className="button button--cart">
                            Cart
                        </Link>
                    )}
                    <Link to="/login" className="button button--logout">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
