import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {TodoSingle} from "./MyComponents/TodoSingle";
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
  return (
    <>
      <Header title="Subroto's Todos" searchBar={false} /> {/* bool value er joonno {} */} 
      <Todos todos={todos} onDelete={onDelete} />
      
      <Footer />
    </>
  );
}

export default App;
