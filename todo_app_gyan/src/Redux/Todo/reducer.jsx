
  const inistate={
      todos:[]
  }
  
  export const todoReducer=(state=inistate,{type,payload})=>{

   switch(type){
       case 'add_todo':return {...state,todos:payload}
       case 'sort':return {...state,todos:[...state.todos].sort((a,b)=> a[payload]>b[payload]? 1:a[payload]< b[payload] ? -1:0)}
       case "DELETE":return {...state,todos:state.todos.filter((el)=>el.id !==payload)}
       default: return state
   }

  }
