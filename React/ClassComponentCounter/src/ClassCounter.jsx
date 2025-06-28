import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div className='flex flex-col justify-center items-center' >
        <p>{this.state.count}</p>
        <button className='bg-red-500 text-black p-3  ' onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <button className='bg-red-500 text-black p-3  ' onClick={()=>this.setState({count:this.state.count-1})}>-</button>
        <button className='bg-red-500 text-black p-3  ' onClick={()=>this.setState({count:0})}>Reset</button>
      </div>
    )
  }
}
export default ClassCounter
