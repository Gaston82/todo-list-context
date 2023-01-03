import React, { useContext, useState } from "react";
import TodosContext from "../context/todos";

const TodoEdit = ({ onSubmit, task }) => {
  const [newTaskName, setNewTaskName] = useState(task.name);

  const { editTaskById } = useContext(TodosContext);

  const handleEdit = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTaskById(task.id, newTaskName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleEdit} value={newTaskName} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoEdit;
