import React from 'react'

const Counter = ({value, increase, decrease}) => {
    return (
        <div>
            <h1>{value}</h1>
            <div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    )
};

export default Counter;