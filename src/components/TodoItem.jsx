import React, { useContext, useState } from 'react'
import TodosContext from '../context/todos'
import TodoEdit from './TodoEdit'



const TodoItem = ({task}) => {
    const[showEdit,setShowEdit]=useState(false)
    const {deleteTaskById } = useContext(TodosContext)

    const handleDelete=()=>{
        deleteTaskById(task.id)
    }

    const handleShowEdit=()=>{
        setShowEdit(!showEdit)
    }

    const handleSubmit=()=>{
        setShowEdit(false)
    }

    let content = <h3>{task.name}</h3>
    if (showEdit) {
        content = <TodoEdit task={task}  onSubmit={handleSubmit}/>
    }

  return (
    <article>
        <div>
            {content}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleShowEdit}>Edit</button>
    </article>
  )
}

export default TodoItem