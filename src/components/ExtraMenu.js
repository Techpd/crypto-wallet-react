import React, { useEffect } from 'react';
const ExtraMenu = ({ className }) => {

    useEffect(() => {
        // Additional initialization logic can go here
        var firstIcon = document.querySelector('.toggleMenu__items span:nth-child(2)')
        firstIcon.classList.add("active");
    }, []);

    document.querySelectorAll('.toggleMenu__items span').forEach(span => {
        span.onclick = function () {
            if (!this.classList.contains("active")) {
                console.log('test');
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        }
    });

    return (
        <div className={`toggleMenu${className}`}>
            <ul className="toggleMenu__menu ls-none">
                <li className="toggleMenu__items">
                    <span className={`day`}>Day</span>
                    <span className={`week`}>Week</span>
                    <span className={`month`}>Month</span>
                    <span className={`year`}>Year</span>
                </li>
            </ul>
        </div>
    );
}

export default ExtraMenu;