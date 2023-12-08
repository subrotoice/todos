import "./App.css"; // Include CSS External
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { useEffect, useState } from "react";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    // checking local storage and initTodos Seted to state variable
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([myTodo, ...todos]);
  };
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  {
    /* Think React way: All code is here, Just include from other way */
  }
  return (
    <>
      <Header title="Subroto's Todos" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
