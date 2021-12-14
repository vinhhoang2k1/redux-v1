import React from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import {increment, decrement} from './action/count'

function App() {
    const count = useSelector(state => state.counter)
    const isLogger = useSelector(state => state.isLogger);
    console.log(count);
    const dispatch = useDispatch();
    console.log(increment());
    return ( <div >
            <h1>count {count}</h1>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

        </div>
    )
}

export default App