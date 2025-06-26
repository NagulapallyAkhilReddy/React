import React from 'react'
import '../App.css'

function Mainpage({name,age,desc,img,fun,fun1}) {

  return (
    <div className='singlepart' >
      <img src={img} alt={name} height="300px" width="250px"  />
      <h2>{name}</h2>
      <h2>{age}</h2>
      <p>{desc}</p>
      <button onClick={()=>fun("a lot")}>Like</button>
      <button onClick={()=>fun1("sorry")}>DisLike</button>
    </div>
  )
}

export default Mainpage
