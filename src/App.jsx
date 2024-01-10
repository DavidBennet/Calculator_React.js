import { useState } from 'react'
import './App.css'

export function App() {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function inputNum(e) {
    var input = e.target.value 
    if(num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear() {
    setNum(0)
  }

  function percentage() {
    setNum(num / 100)
  }

  function signHandle() {
    if(num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandle(e) {
    var operatorInput = e.target.value
    
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {
    if(operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num))
    }
    if(operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num))
    }
    if(operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num))
    }if(operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
  }

  return (
    <div className='wrapper'>
      <h1>Vintage Calculator</h1>
      
      <div className='calculator'>
        <div className='screen'>{num}</div>
        <button type="button" className='btn' id='clear'onClick={clear}>C</button>
        <button type="button" className='signs' id='sign' onClick={signHandle} >+/-</button>
        <button type="button" className='signs' id='percent' onClick={percentage} >%</button>
        <button type="button" className='signs' id='division' onClick={operatorHandle} value="/">/</button>
        <button type="button" className='btn' id='seven' onClick={inputNum} value={7}>7</button>
        <button type="button" className='btn' id='eight' onClick={inputNum} value={8}>8</button>
        <button type="button" className='btn' id='nine' onClick={inputNum} value={9}>9</button>
        <button type="button" className='signs' id='ex' onClick={operatorHandle} value="x">x</button>
        <button type="button" className='btn' id='four' onClick={inputNum} value={4}>4</button>
        <button type="button" className='btn' id='five' onClick={inputNum} value={5}>5</button>
        <button type="button" className='btn' id='six' onClick={inputNum} value={6}>6</button>
        <button type="button" className='signs' id='deduct' onClick={operatorHandle} value="-">-</button>
        <button type="button" className='btn' id='one' onClick={inputNum} value={1}>1</button>
        <button type="button" className='btn' id='two' onClick={inputNum} value={2}>2</button>
        <button type="button" className='btn' id='three' onClick={inputNum} value={3}>3</button>
        <button type="button" className='signs' id='addition' onClick={operatorHandle} value="+">+</button>
        <button type="button" className='btn' id='zero' onClick={inputNum} value={0}>0</button>
        <button type="button" className='btn' id='dot' onClick={inputNum} value="." >.</button>
        <button type="button" className='btn' id='equal' onClick={calculate} value="=">=</button>
      </div>
    </div>
  )
}
