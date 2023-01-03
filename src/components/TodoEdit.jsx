import React, { useState } from "react";
import useTodosContext from "../hooks/use-todos-context";

const TodoEdit = ({ onSubmit, task }) => {
  const [newTaskName, setNewTaskName] = useState(task.name);

  const { editTaskById } = useTodosContext()

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
