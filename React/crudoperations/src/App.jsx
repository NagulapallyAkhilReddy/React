import React from 'react'
import Header from './Components/Header'
import UsersList from './Components/UsersList'
import { useState } from 'react'
import Modals from './Components/Modals'

function App() {

  const API_URL=import.meta.env.VITE_API_URL

  const [show,setShow]=useState(false);
   
  const postData =async(email,name)=>{
    try{
    const res=await fetch(`${API_URL}`,{
      method:"POST",
      body:JSON.stringify({
        name:name,
        email:email
      })
    })
    window.location.reload();
  }
  catch(err){
    console.log("fetch error"+err)
  }

  }
  return (
    <div>
      <Header setShow={setShow} />
      {show && <Modals show={show} setShow={setShow} postData={postData} />}
      <UsersList />
      
    </div>
  )
}

export default App
