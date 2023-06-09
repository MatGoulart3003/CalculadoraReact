import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState()
  const [result, setResult] = useState(0)
  var [telaOperacao, setTelaOperacao] = useState('')

  function inputNum(event){
    let input = event.target.value
   
    if (input == 0){
      console.log(input)
      setTelaOperacao('')
      return;      
    }else if (num===0){
      setNum(input)
      setTelaOperacao(telaOperacao+input)
    }else{
      setNum(num+input)
      setTelaOperacao(telaOperacao+input)
    }
  }
  
  

  function clear() {
    setNum2(0)
    setNum(0)
    setResult(0)
    setTelaOperacao('')
  }
  function selectOperator(event){
    var aux = event.target.value
    var aux2 = telaOperacao.length
    
    if(telaOperacao.charAt(aux2-1) === '+' || telaOperacao.charAt(aux2-1) === '-' || 
    telaOperacao.charAt(aux2-1) === '*' || telaOperacao.charAt(aux2-1) === '/' ){
      setTelaOperacao(telaOperacao.substring(0, aux2 - 1) + aux)
    } else {
      setOperator(aux)
      setNum2(num)
      setNum(0)
      setTelaOperacao(telaOperacao + aux)
    }
  }
  

  function calculate(){
    let newResult = 0
    if(operator === '+'){
      newResult = parseFloat(num2) + parseFloat(num)
    } else if (operator === '-'){
      newResult = parseFloat(num2) - parseFloat(num)
    } else if (operator === '/'){
      newResult = parseFloat(num2) / parseFloat(num)
    } else {
      newResult = parseFloat(num2) * parseFloat(num)
    }
    setResult(prevResult => prevResult + newResult)
    setNum2(newResult)
    setNum(0)
  }

   return (
    <div className='box'>
      <h1 className='operation'>{telaOperacao}</h1>
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
