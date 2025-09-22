import React from 'react'
import "../app.css"

function Book(props) {
  return (
    <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {
        props.books.map((v,i)=>(
          <div>
            <h1>{v.title}</h1>
            <img src={v.url} alt={v.title}  />
            <p>{v.author}</p>
          </div>
          
        ))
      }
    </div>
  )
}

export default Book
