import { useState } from 'react';

const Stopwatch = () => {
    let [value, setValue] = useState(0);

    const incBtn = () => {
        setValue(preValue => preValue + 1);
    }

    const decBtn = () => {
        setValue(preValue => preValue - 1);
    }

    return (
        <div className="container">
            <div className="row align-items-center m-2">
                <div className="col-lg-4">
                    <div className="timer">{value}</div>
                </div>
                <div className="col-lg-8">
                    <div className="row d-grid">
                        <button onClick={incBtn} className="plus">+</button>
                        <button onClick={decBtn} className="minus">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;