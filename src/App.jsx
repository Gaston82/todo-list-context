import { useContext} from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodosContext from "./context/todos";

function App() {

  const {tasks}=useContext(TodosContext)


  return (
    <div className="App">
      <h1>Todo List Context</h1>
      {tasks.length === 0 ? (
        <h2>Aún no tienes tareas!!</h2>
      ) : (
        <TodoList />
      )}

      <TodoCreate />
    </div>
  );
}

export default App;

