import "./App.css"
import { useState, useRef, useEffect } from "react"

const Card = ({todo, status, inputitem, check, setTodo}) => {

  const setChecked=(id)=>{
    const newArr = todo.map((i)=>  i.id === id? {...i, checkers : !i.checkers}: {...i});setTodo(newArr)
}

    return (
       <div className='Card-Holder'>
        <div className='Card-Holder2'>
        <div className='todo'>
        <h1>Todo's</h1>
        </div>
        <div className='todo2'>
        <p>3 Total, 2 Complete and 1 Pending </p>
      
        </div>
        <div className='input-holder'>
        <div className='Input1'>
          <div className='Title-holder'>
          <p>#</p>
          <h3>Todo Title</h3>
          </div>
        <div className="check">
          <h3>STATUS</h3>
        </div>
        </div>
          <div className="scrollBar">
          {todo?.map((item) => <div key={item.id} className="Cards">
          <div className="Cards-Wrap" style={{backgroundColor: item.checkers === true?
            `#b9f4b7` : `#fff`
        }}>
            <input type="checkbox"
             onChange={ () => setChecked (item.id) }
            />
                <p>{item.todo}</p>

                <p>{item.checkers? "completed" : "pending"}</p>
          </div>

        </div>
        
        )}
          </div>
       

        </div>
        </div>
      </div>
    )
}

export default Card