import React from 'react'
// import { myStore } from './redux/Store'
import {useDispatch,useSelector}  from 'react-redux'
// import { decrement, increment, reset } from './redux/Action';
import { increment,decrement ,incrementByAmount} from './redux/Reducer';

function App() {
  const dispatch=useDispatch();
  const count=useSelector(state=> state.counter.value)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>by amount {5}</button>
    </div>
  )
}

export default App
