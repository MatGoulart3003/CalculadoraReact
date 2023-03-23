import React from 'react'
import './Calculator.css'

export default function Calculator() {
 
   return (
    <div className='box'>
      <h1 className='operation'>1-1</h1>
      <h1 className='result'>0</h1>
        <button className='buttonRight'>C</button>
        <button className='buttonLeft'>/</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>X</button>        
        
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>

        <button className='buttonRight'>0</button>      
        <button className='buttonLeft'>=</button>
    </div>
  )
}
