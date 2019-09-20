import React from 'react';
import {connect} from "react-redux";
import {decreaseAsync, increaseAsync} from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({value, increaseAsync, decreaseAsync}) => {
    return(
        <Counter value={value}
                 increase={increaseAsync}
                 decrease={decreaseAsync}
        />
    )

};
export default connect(
    ({counter}) => ({
        value: counter.value
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);

