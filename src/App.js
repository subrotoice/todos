import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(
 [
    {
      sno : 1,
      title : "Go To Home",
      desc : "Home tour of your favorite think to do"
    },
    {
      sno : 2,
      title : "Go To Office",
      desc : "Office tour of your favorite think to do"
    },
    {
      sno : 3,
      title : "Go To Park",
      desc : "Park tour of your favorite think to do"
    }
  ])
  const onDelete = (todo)=> {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc)=>{
    let sno;
    if (todos.length==0) {
      sno = 0;
    } else {
      let sno = todos[todos.length-1].sno+1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  return (
    <>
      <Header title="Subroto's Todos" searchBar={false} /> {/* bool value er joonno {} */} 
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
