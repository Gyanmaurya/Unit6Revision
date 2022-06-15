
export const addCount=(payload)=>{
    return{
        type:"ADD_COUNT",
        payload
    }
      }
      export const reduceCount=(payload)=>{
    return{
        type:"REDUCE_COUNT",
        payload
    }
      }