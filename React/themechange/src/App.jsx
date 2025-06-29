
import React, { useState } from 'react'
import Parent from './Components/Parent'
import { createContext } from 'react'
export const themecontext=createContext();


function App() {

  const [theme,setTheme]=useState('light')
  const [textColor,setTextColor]=useState("blue")
  
  return (
    <themecontext.Provider value={{theme,textColor}}>
    <div className='flex justify-center items-center'>
    <div className='h-[550px] w-[550px] border-2 border-amber-500 p-10 flex flex-col justify-center items-center '>
      <Parent />
      <button >
        <input onChange={(e)=>setTheme(e.target.value)} type="color" />
      </button>
      {theme}
      <button ><input onChange={(e)=>setTextColor(e.target.value)} type="color"  /></button>
    </div>
    </div>
    </themecontext.Provider>
  )
}

export default App
