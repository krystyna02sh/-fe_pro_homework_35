// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <button className='but' onClick={() => dispatch(decrement())}>-</button>
            <span className='num'>{count}</span>
            <button className='but' onClick={() => dispatch(increment())}>+</button>
            <div>
                <button className='res' onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;


