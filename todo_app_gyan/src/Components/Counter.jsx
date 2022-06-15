 import React from 'react'
 import {addCount,reduceCount} from '../Redux/Counter/action'
 import { useDispatch,useSelector } from "react-redux";
 
 function Counter() {
  const dispatch=useDispatch();
  const Counter=useSelector((store)=>store.Counter.Counter);
  
  
  
   return (
     <div>
         <h1>Counter:{Counter}</h1>
          <button onClick={()=>dispatch(addCount(1))} >Add</button>
          <button onClick={()=>dispatch(reduceCount(1))}>Reduce</button>
     </div>
   )
 }
 
 export default Counter
 