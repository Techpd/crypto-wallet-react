import React from 'react';
import menuDot from '../assets/images/menu_dots.png';
import iconBack from '../assets/images/icon_back.png';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-2 d-flex align-items-center">
                        <img className="cursor-pointer header__icon" loading="lazy" src={iconBack} alt="menu_dots" />
                    </div>
                    <div className="col-md-8 col-8 text-align-center">
                        <a className="header__logo" href="/">Bitcoin Wallet</a>
                    </div>
                    <div className="col-md-2 col-2 d-flex justify-content-end">
                        <div className="header__menu_dots d-flex justify-content-center align-items-center">
                            <img className="header__icon" loading="lazy" src={menuDot} alt="menu_dots" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
