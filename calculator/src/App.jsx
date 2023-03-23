import { useState } from 'react'
import Calculator from './Components/Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculator/>
    </div>
  )
}

export default App
