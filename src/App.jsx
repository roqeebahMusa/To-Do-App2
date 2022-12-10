import "./App.css";
import Card from "./Card";
import React, { useState, useEffect, useRef } from 'react';


function  App () {
  const inputRef = useRef("")
  const [todo, setTodo] = useState([])
  const [checked, setChecked] = useState(null)
  const [item, setitem] = useState("")

  let newData = {}

  const handleClick = () => {
    if (inputRef.current.value) {
      newData.id = todo.length + 1
      newData.todo = inputRef.current.value
      newData.checkers = false
      setTodo((val) => { return [...val, newData] })
    }
  }

useEffect(() => {
  console.log (todo)
},
[todo] )
  
  return (
    <div className='App'>
       <div className='App-Wrap'>
        <div className='card1'>
          <div className='Input'>
          <input ref={inputRef} type="text"
          className='New-List' 
          placeholder='Add new todo..'/>
          <button onClick={handleClick} className='add'>+</button>
          </div>
        </div>
        <Card todo={todo} inputitem={setitem} status={setChecked} check={checked} setTodo = {setTodo}/>
       </div>
    </div> 

  )
}

export default App