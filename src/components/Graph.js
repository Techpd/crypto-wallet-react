// import "./styles.css";
import React from "react";
import {
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer
} from "recharts";


// Original data
const originalData = [
    { coin: "Bitcoin", balance: 7, value: 4.895, invested: 4.895 },
    { coin: "Bitcoin", balance: 8, value: 6.5, invested: 5 },
    { coin: "Bitcoin", balance: 10, value: 6.8, invested: 6 },
    { coin: "Bitcoin", balance: 10, value: 6.7, invested: 6 },
    { coin: "Bitcoin", balance: 5.5, value: 6.3, invested: 12 },
    { coin: "Bitcoin", balance: 7, value: 4.894, invested: 4.895 },
    { coin: "Bitcoin", balance: 8, value: 5.1, invested: 5 },
    { coin: "Bitcoin", balance: 10, value: 6, invested: 6 },
    { coin: "Bitcoin", balance: 5.5, value: 6.857, invested: 12 }
];
const values = originalData.map(item => item.value);
const minValue = Math.min(...values);
const maxValue = Math.max(...values);

const linearGradientId = "linear-gradient-stroke";
const gradientStroke = (
    <defs>
        <linearGradient id={linearGradientId} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffc843" />
            <stop offset="100%" stopColor="#ff8f17" />
        </linearGradient>
        <linearGradient id="circleGradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffc843" />
            <stop offset="100%" stopColor="#ff8f17" />
        </linearGradient>
    </defs>
);

const Graph = () => {
    return (
        <div className="graph">
            <div className="graph__values">
                <div className="graph__value lower">Lower: ${minValue}</div>
                <div className="graph__value higher">Higher: ${maxValue}</div>
            </div>
            <div className="graph-wrapper">
                <ResponsiveContainer width="95%" height="100%">
                    <AreaChart
                        // width={500}
                        // height={200}
                        data={originalData}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <Tooltip />
                        {gradientStroke}
                        <Area dot={1} activeDot={1} type="monotone" dataKey="value" stroke={`url(#${linearGradientId})`} fill="#fff7ee" fillOpacity={1} radius={10} />
                    </AreaChart>
                </ResponsiveContainer>
                <div className="current_btc">
                    1 BTC = $5.483
                </div>
            </div>
        </div>
    );
}

export default Graph;
