import React from 'react'

export default function TodoElement(props) {
  return (
    <div className='container my-4'>
      <h4>{props.todo.sno + '. ' + props.todo.title}</h4>
      <p>{props.todo.desc} <br/>
      <button className="btn btn-danger btn-sm" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
      </p>
      <hr/>
    </div>
  )
}
