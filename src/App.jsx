import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/CounterSlice';

function App() {

  const count = useSelector((state)=> state.counters.value)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit Demo</h1>

      <div>
        <h2>Counter : {count}</h2>
        <div style={{display:"flex", gap:"20px"}}>

          <button onClick={()=>dispatch(increment())}>Increment</button>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>
          <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App;
