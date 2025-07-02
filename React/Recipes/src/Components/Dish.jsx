import React from 'react'
import Modal from '@mui/material/Modal';

function Dish({img,preptime,name,ingredients,instructions}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='h-[350px] w-[200px] flex flex-col justify-center items-center gap-10px p-2 relative'>
      <img className='p-3px object-contain rounded-full p-2 ' src={img} alt={name} />
      <h2 className='font-bold text-center p-10px'>{name}</h2>
      <button onClick={handleOpen} className='m-0 absolute bottom-3 text-amber-600 border-2 rounded-full p-2 hover:text-red-500  '>How to Prepare</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='text-black bg-white flex flex-col absolute top-40 p-20 rounded-full relative '>
          <div >
            <button className='absolute right-30 top-2 text-gray-500 hover:text-red-500 rounded-full p-2 border-red-500 border-2' onClick={handleClose}>
              X
            </button>
          </div>
          <div >
          <div className='text-amber-700 font-bold'>
            <span className='text-red-500'>Ingredients:</span> {ingredients}
          </div>
          <div className='text-green-500 font-extrabold'>
            <span className='text-yellow-500 font-bold'>Instructions:</span> {instructions}
          </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Dish
