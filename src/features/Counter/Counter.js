import React from 'react';
import { countValue, increment, decrement } from "./CounterSlice"
import { useSelector, useDispatch } from 'react-redux';
export const Counter = props => {
    const dispatch = useDispatch()
    const count = useSelector(countValue)
    return <div>
        {count}
        <button onClick={() => dispatch(increment(6))}>increment</button>
        <button onClick={() => dispatch(decrement(4))}>decrement</button>
    </div>
}