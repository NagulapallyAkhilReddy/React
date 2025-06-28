import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';

function MainCard({img,title,price,desc,rating}) {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className='w-[250px] p-4 shadow-lg hover:shadow-xl m-2 rounded-md bg-white border'>
      <img  src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <button onClick={handleOpen}>See More</button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=' flex flex-col absolute top-52 left-40 bg-white w-250 h-60 rounded-full p-10 transition-all ease-in-out relative'>
          <div className='absolute top-2 right-20 right-0 text-gray-500 hover:text-red-500'> 
            <button onClick={handleClose}>X</button>
          </div>
          <div>
             {desc}
          </div>
         
        </div>
      </Modal>
    </div>
  )
}

export default MainCard
