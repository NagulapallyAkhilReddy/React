const increment=()=>{
  return{
    type:"incr",
    payload: 5
  }
}
const decrement=()=>{
  return{
    type:"decr",
    payload: 5
  }
}
const reset=()=>{
  return{
    type:"reset",
    payload: 0
  }
}

export {increment,decrement,reset}