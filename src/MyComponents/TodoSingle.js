import React from 'react'

export const TodoSingle = (props) => {
  return (
    <>
      <h1>{props.todo.title}</h1>
      <h5>{props.todo.desc}</h5>
      <button className="btn btn-sm btn-danger" onClick={props.onDelete}>Delete</button>
    </>
  )
}
