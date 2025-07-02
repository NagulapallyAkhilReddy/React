import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
export const MyContext=createContext();
const c=3;

createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={c}>
    <App />
  </MyContext.Provider>,
)
