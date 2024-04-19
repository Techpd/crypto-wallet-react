import React from 'react';
const ExtraMenu = ({ className }) => {
    return (
        <div className={`toggleMenu${className}`}>
            <ul className="toggleMenu__menu ls-none">
                <li className="toggleMenu__items">
                    <span className="day">Day</span>
                    <span className="week active">Week</span>
                    <span className="month">Month</span>
                    <span className="year">Year</span>
                </li>
            </ul>
        </div>
    );
}

export default ExtraMenu;