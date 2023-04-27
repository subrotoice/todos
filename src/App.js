import './App.css'; // Include CSS External
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { useEffect, useState } from 'react';

function App() {
  let initTodos;
  if(localStorage.getItem('todos')===null) { // checking local storage and initTodos Seted to state variable
    initTodos = [];   
  } else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }
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
      sno = todos[todos.length-1].sno+1;
    }
    
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(initTodos);
  // Think: when setTodos call then all code in useEffect will execute. 
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  {/* Think React way: All code is here, Just include from other way */} 
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
