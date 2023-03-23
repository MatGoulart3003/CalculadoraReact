import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState()
  const [result, setResult] = useState(0)

  function inputNum(event){
    if(num === "c"){
      setNum(num)
    }else if (num===0){
      setNum(event.target.value)
    }else{
      setNum(num+event.target.value)
    }
  }
  
  function clear(event) {
    setNum(0)
    setResult(0)
  }

  function selectOperator(event){
    var aux = event.target.value
    console.log(aux)
    setOperator(aux)
    setNum2(num)
    setNum(0)
   }

  function calculate(){
    if(operator === '+'){
      setResult(parseFloat(num2) + parseFloat(num))
    }else if (operator === '-'){
      setResult(parseFloat(num2) - parseFloat(num))
    }else if (operator === '/'){
      setResult(parseFloat(num2) / parseFloat(num))
    }else {
      setResult(parseFloat(num2) * parseFloat(num))
    }
  }

   return (
    <div className='box'>
      <h1 className='operation'>{num}</h1>
      <h1 className='result'>{result}</h1>
        <button className='buttonRight' onClick={clear} value={"c"}>C</button>
        <button className='buttonLeft' onClick={selectOperator} value={"/"}>/</button>

        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button onClick={selectOperator} value={'*'}>X</button>        
        
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button onClick={selectOperator} value={"+"}>+</button>

        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button onClick={selectOperator} value={'-'}>-</button>

        <button className='buttonRight' onClick={inputNum} value={0}>0</button>      
        <button className='buttonLeft' onClick={calculate} value={"="}>=</button>
    </div>
  )
}
