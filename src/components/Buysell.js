import React from "react";
export const Buysell = (props) => {
    return (
        <div className="buysell">
            <i className={`buysell__icon${props.className ? " " + props.className : ''}`}></i>
            <p>{props.BuysellText}</p>
        </div>
    );
}