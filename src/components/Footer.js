import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet as solidWallet, faCompass as solidCompass, faBell as solidBell, faGear as solidGear } from '@fortawesome/pro-solid-svg-icons';
import { faWallet as regularWallet, faCompass as regularCompass, faBell as regularBell, faGear as regularGear } from '@fortawesome/pro-regular-svg-icons';



const Footer = () => {
    const [activeIcon, setActiveIcons] = useState([false]);

    const toggleActiveIcon = (index) => {
        const newActiveIcons = [...activeIcon];
        newActiveIcons[index] = !newActiveIcons[index];
        setActiveIcons(newActiveIcons);
    }

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <nav className="container">
                    <ul className="footer__icons ls-none d-flex">
                        <li onClick={() => toggleActiveIcon(0)} className="footer__icon">
                            <FontAwesomeIcon icon={activeIcon[0] ? regularWallet : solidWallet} />
                        </li>
                        <li onClick={() => toggleActiveIcon(1)} className="footer__icon">
                            <FontAwesomeIcon icon={activeIcon[1] ? solidCompass : regularCompass} />
                        </li>
                        <li onClick={() => toggleActiveIcon(2)} className="footer__icon">
                            <FontAwesomeIcon icon={activeIcon[2] ? solidBell : regularBell} />
                        </li>
                        <li onClick={() => toggleActiveIcon(3)} className="footer__icon">
                            <FontAwesomeIcon icon={activeIcon[3] ? solidGear : regularGear} />
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
