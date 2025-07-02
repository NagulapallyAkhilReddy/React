import React, { useState } from 'react'
import Parent from './Components/Parent'
import { createContext } from 'react'
export const themecontext=createContext();


function App() {

  const [theme,setTheme]=useState('light')
  return (
    <themecontext.Provider value={theme}>
    <div className='flex justify-center items-center'>
    <div className='h-[550px] w-[550px] border-2 border-amber-500 p-10 flex  '>
      <Parent />
      <button onClick={(e)=>setTheme(e.target.textContent)}>{theme=='light'?'dark':'light'}</button>
      {theme}
    </div>
    </div>
    </themecontext.Provider>
  )
}

export default App
