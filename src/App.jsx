// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const add = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  return (
    <>
      <Router>
        <Navbar title="My Todos List" />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <div className="container">
              <AddTodo addTodo={add} />
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          } />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
