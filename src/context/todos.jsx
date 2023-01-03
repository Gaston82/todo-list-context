import { createContext, useState } from "react";

const TodosContext = createContext()


function Provider({children}) {

    const [tasks, setTasks] = useState([
        { id: 1, name: "Pagar seguro" },
        { id: 2, name: "Estudiar React" },
      ]);
    
      const createTask = (newTask) => {
        const updateTasks = [...tasks, { id: Math.random() * 9999, name: newTask }];
        setTasks(updateTasks);
      };
    
      const deleteTaskById = (id) => {
        const updateTasks = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(updateTasks);
      };
    
      const editTaskById = (id, newTaskName) => {
        const updateTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, name: newTaskName };
          }
          return task;
        });
        setTasks(updateTasks);
      };

      const store={
        tasks,
        deleteTaskById,
        editTaskById,
        createTask
      }

    return(
        <TodosContext.Provider value={store}>
            {children}
        </TodosContext.Provider>
    )
    
}


export default TodosContext;
export {Provider}