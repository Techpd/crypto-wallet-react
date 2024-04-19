import React, { useState } from 'react';
import iconBitcoin from '../assets/images/bitcoing.png'
import iconArrow from '../assets/images/arrow_down.png'
import ExtraMenu from "./ExtraMenu";

const Bitcoin = () => {
    const [isActive, settoggleClass] = useState(false);

    const toggleClass = () => {
      settoggleClass(!isActive);
    };

    return (
        <>
            <div className="bitcoin">
                <div className="bitcoin__icon_text">
                    <div className="wrapper-left">
                        <img src={iconBitcoin} loading='lazy' alt="bit coin" />
                        <p>Bitcoin</p>
                    </div>
                    <div className="wrapper-right">
                        <p>BTC</p>
                    </div>
                </div>

                <div className="currancy">
                    <span className="currancy__amount">3.529020</span>
                    <span className="currancy__amount currancy__type">BTC</span>
                </div>

                <div className="user_currancy">
                    <p>
                        <span className="user_currancy__sym">$</span>
                        <span className="user_currancy__amount">19.153</span>
                        <span className="user_currancy__type">USD</span>
                    </p>
                    <span className="user_currancy__monitor-btn">-2.32%</span>
                </div>
                <div className="bitcoin__toggle_arrow">
                    <img className={isActive ? 'active' : ''} src={iconArrow} alt="down_arrow" onClick={toggleClass} />
                </div>
            </div>
            <ExtraMenu className={isActive ? ' active' : ''} />
        </>
    );
}

export default Bitcoin;