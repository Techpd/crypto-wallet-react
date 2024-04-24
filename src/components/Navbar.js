import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleInfo, faArrowUpFromBracket, faCircleMinus } from '@fortawesome/pro-regular-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="menu ls-none">
                <li className="menu__items"><span>Edit</span><FontAwesomeIcon icon={faPenToSquare} /></li>
                <li className="menu__items"><span>Courier info</span><FontAwesomeIcon icon={faCircleInfo} /></li>
                <li className="menu__items"><span>Share</span><FontAwesomeIcon icon={faArrowUpFromBracket} /></li>
                <li className="menu__items active"><span>Remove</span><FontAwesomeIcon icon={faCircleMinus} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;