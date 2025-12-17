import "./App.css";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let AddNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

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
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
