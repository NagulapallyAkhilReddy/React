import React, { useState } from 'react'

function App() {
  const [c,setC]=useState(0);
  const [color,setColor]=useState("orange");
  function changeColor(e){
    setColor(e.target.value)
  }
  const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "teal",
  "lime",
  "maroon",
  "navy",
  "gold",
  "silver"
];

  function changeColorRandom(){
    const randomIndex=Math.floor(Math.random() * colors.length)
    setColor(colors[randomIndex])
  }
  function reset(){
    setColor("orange")
  }

  return (
    <div className='main' style={{backgroundColor:color, height:"100vh", width:"100vw", display:'flex', flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>
      <p style={{fontSize:'20px', color:'black'}}>choose the color</p>
      <input type="color" placeholder='choose the color' onChange={changeColor} />
      <h1>{c}</h1>
      <button onClick={()=>{
        setC((c)=>c+2);
        changeColorRandom();
      }
      } >i add 2</button>
      <button onClick={()=>{
        setC((c)=>c-2);
        changeColorRandom();
        }} >i romve 2</button>
      <button onClick={()=>{
        setC((c)=>c=0);
        reset();
        }} >i reset</button>


    </div>
  )
}

export default App
