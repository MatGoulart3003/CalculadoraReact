import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {

  const [num, setNum] = useState(0)

  function inputNum(value){
    if(num === "c"){
      setNum(num)
    }else if (num===0){
      setNum(value.target.value)
    }else{
      setNum(num+value.target.value)
    }
  }
  
  function clear(value) {
    setNum(0)
  }
   return (
    <div className='box'>
      <h1 className='operation'>{num}</h1>
      <h1 className='result'>0</h1>
        <button className='buttonRight' onClick={clear} value={"c"}>C</button>
        <button className='buttonLeft' onClick={inputNum} value={"/"}>/</button>

        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button onClick={inputNum} value={'*'}>X</button>        
        
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button onClick={inputNum} value={"+"}>+</button>

        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button onClick={inputNum} value={'-'}>-</button>

        <button className='buttonRight' onClick={inputNum} value={0}>0</button>      
        <button className='buttonLeft' onClick={inputNum} value={"="}>=</button>
    </div>
  )
}
