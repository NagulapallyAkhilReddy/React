import React, { useEffect, useState } from 'react'

function MainCard({img,title,price,desc,rating}) {
  
  return (
    <div className='w-[250px] p-4 shadow-lg hover:shadow-xl m-2 rounded-md bg-white border'>
      <img  src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <button>Add to cart</button>
    </div>
  )
}

export default MainCard
