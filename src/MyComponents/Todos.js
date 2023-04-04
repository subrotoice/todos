import React from 'react'
import { TodoSingle } from './TodoSingle'

export default function Todos(props) {
  return (
    <div className='container'>
      <h1 className='text-center my-2'>ToDo's List</h1>
      {props.todos.map((item) => <TodoSingle todo={item} onDelete={props.onDelete}/>)}
    </div>
  )
}
