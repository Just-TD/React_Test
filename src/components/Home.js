import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { increment,decrement, incrementWithParams } from '../redux/CounterSlice';


const Home = () => {
  const dispatch = useDispatch()
    let count = useSelector((state) => state.counterReducer.count);
    console.log(count);

  return (
    <div> 
        <h3 className='bg-dark text-danger rounded-pill'>Welcome to the Home page!!!</h3>
        <h1 className='bg-info text-white w-25'>{count}</h1>
        <button onClick={() => dispatch(increment())} className="btn btn-dark btn-lg mt-4">Increment</button>
        <button onClick={() => dispatch(decrement())} className="btn btn-success btn-lg ">Decrement</button>
        <button onClick={() => dispatch(incrementWithParams(30))} className="btn btn-danger btn-lg">Increment with Parameters</button>
    </div>
  )
}

export default Home