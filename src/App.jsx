import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import useTodosContext from "./hooks/use-todos-context";

function App() {

  const {tasks}=useTodosContext();


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

