import React, { useEffect, useState } from 'react'

function RandomUser() {
  const [user,setUser]=useState(null)
  const [desc,setDesc]=useState("hey there")
  useEffect(()=>{
    fetch('https://randomuser.me/api')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setUser(data.results[0])})
    .catch(err=>console.log(err))
  },[])

  if(!user) return <div>Loading...</div>
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2'>
      <div className={`flex flex-col gap-2 justify-center items-center `}>
        <img style={{height:'200px', width:'200px'}} src={user.picture.large} alt={user.name.first} />
        <h2 className='text-3xl'>{user.name.title} {user.name.first} {user.name.last}</h2>
        <h2>{desc}</h2>
      </div>
      <div className='flex gap-6 '>
        <button  onClick={()=>setDesc(`my contact is ${user.cell}`)}>PhoneNumber</button>
        <button onClick={()=>setDesc(`my email is ${user.email}`)}>Email</button>
        <button onClick={()=>setDesc(`my age is ${user.dob.age}`)}>Age</button>
        <button onClick={()=>setDesc(`my address is ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state},${user.location.country}`)}>Address</button>
      </div>
    </div>
  )
}

export default RandomUser
