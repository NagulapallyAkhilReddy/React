import React, { Component } from 'react'
import ClassCounter from './ClassCounter'

class App extends Component {
  date=new Date;
  year=this.date.getFullYear();
  render() {
    return (
      <div className='flex flex-col justify-center items-center '>
        <header className='bg-amber-600 text-center font-bold w-full'>The Counter</header>
        <ClassCounter />
        <footer className='bg-black text-white text-center bottom-0 absolute w-full' >This site belongs to A.K.H.I.L  &copy; {this.year}</footer>
      </div>
    )
  }
}

export default App
e