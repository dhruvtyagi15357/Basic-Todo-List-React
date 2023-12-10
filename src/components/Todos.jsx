import React from 'react'
import TodoElement from './TodoElement'

export default function Todos(props) {
  return (
    <>
        <div className='Todos'>
          <h3 className= 'my-3'>Todos list</h3>
          {props.todos.length === 0 ? "No todos to display." :
            props.todos.map((todo)=>{
              return <TodoElement todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
            })
          }
        </div>
        
    </>
  )
}
