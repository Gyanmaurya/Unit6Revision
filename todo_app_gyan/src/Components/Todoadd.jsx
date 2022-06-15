

  import { useState,React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Delete, getTodo, Sort } from '../Redux/Todo/action';
  
  function Todoadd() {
    
    const [todo,setTodo]=useState('');
    const dispatch=useDispatch();
    const [filter,setFilter]=useState('')
    const todos=useSelector((store)=>store.todos.todos,(pre,curr)=>{
      return false;
    });
    const handletodo=()=>{
     
     let payload={
        title:todo,
        status:false
      };
      fetch('http://localhost:8080/todos',{
        
        body:JSON.stringify(payload),
        headers:{
          "content-type":"application/json"
        },
        method:"POST"
      }).then(()=>setTodo('')).then(()=>dispatch(getTodo()))

    }
    useEffect(()=>{
      dispatch(getTodo())
    },[])

    

    return (
      <div>
        <input type="text" placeholder='filter' value={filter} onChange={(e)=>setFilter(e.target.value)} />
        <select name="" id=""  onChange={(e)=>dispatch(Sort(e.target.value)) }>
          <option value="id">sort by</option>
          <option value="status">status</option>
          <option value="title">title</option>
        </select>
      <input type="text" value={todo} name="" id="" placeholder='Enter details' onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={handletodo}>Submit</button>
      {todos.filter(todos=>todos.title.includes(filter)).map(e=> <div>{e.title} 
      
         <button onClick={()=>{
           dispatch(Delete(e.id))
         }}>togle</button>
      </div>)}

      </div>
    )
  }
  
  export default Todoadd;
  