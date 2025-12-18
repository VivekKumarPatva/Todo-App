import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let AddNewTask = () => {
    setTodos(() => {
      return [...todos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deletetodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add your Task"
        onChange={updateTodoValue}
        value={newTodo}
      />
      <button onClick={AddNewTask}>Add</button>
      <br />
      <br />
      <hr />
      <h3>Your To Do Tasks</h3>
      <ul>
        {todos.map((todos) => {
          return (
            <li key={todos.id}><span>{todos.task}</span>
              <button onClick={() => deletetodo(todos.id)}> Delete </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
