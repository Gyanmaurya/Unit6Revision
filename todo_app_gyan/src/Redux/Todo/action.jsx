
 
 
 
 export const Addtodo=(payload)=>{
    return{
        type:"add_todo",
        payload
    }
      }
      export const getTodo=()=> async(dispatch)=>{ fetch('http://localhost:8080/todos').then(x=>x.json()).then(data=>{
        dispatch(Addtodo(data))
      })}

      export const Sort=(by)=>{
         return {
            type:"sort",
            by
         }
      }
      export const Delete=(id)=>{
         return {
            type:"DELETE",
            id
         }
      }
//  export const getTodo=async(dispatch)=>{

//     const res= await fetch('http://localhost:8000/todos')
//     const data=res.json();
//     dispatch(Addtodo(data));
    

//     }
   