
const iniState={
    Counter:0,
    
}

const Countreducer=(state=iniState,{type,payload})=>{
   
 switch(type){
     case "ADD_COUNT": return{...state,Counter:state.Counter+payload};
     case "REDUCE_COUNT":return {...state,Counter:state.Counter-payload};
     
     default: return state
 }
}
export {Countreducer};