import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';


function UsersList() {
  const [userdata,setUserdata]=useState([])
  const API_URL=import.meta.env.VITE_API_URL
  const fetchData =async()=>{
    try{
      const res=await fetch(`${API_URL}`)
      const data=await res.json();
      console.log(data)
      setUserdata(data)
    }
    catch(err){
      console.log("caught error"+err);
    }
  }
  const deleteData = async(id)=>{
    try{
      const res=await fetch(`${API_URL}/${id}`,{
        method :"DELETE"}
      )
      
      console.log(res)
      fetchData()
    }
    catch(err){
      console.log("caught error"+err);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='container'>
      <Table striped bordered hover>
      <thead>
        <h1>Users Table</h1>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {userdata && userdata.map((v,i)=>(
        <tr key={v.id} >
          <td >{v.name}</td>
          <td >{v.email}</td>
          <td><button onClick={()=>deleteData(v.id)} className='btn btn-danger'>🗑️</button></td>
        </tr>
        
         ))}
      </tbody>
    </Table>

     
      
    </div>
  )
}

export default UsersList
