import React, { useState } from 'react'

export const AddTodo = (props) => {  // Taking function as argument(props)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e)=>{  // OnSubmit has this function
    e.preventDefault();
    if(!title || !desc) {
      alert("Title and Description can not be Blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className='container py-3'>
        {/* {localStorage.setItem("lastname", "Smith")}
        {localStorage.getItem("lastname")}
        {window.localStorage.setItem('user', JSON.stringify(person))} // JSON fromat
        {localStorage.getItem('user')} */}
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="description" />
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}
