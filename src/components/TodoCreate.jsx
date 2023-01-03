import React, { useContext, useState } from 'react'
import TodosContext from '../context/todos'


const TodoCreate = () => {

    const [taskName,setTaskName]=useState("")

    const{createTask}=useContext(TodosContext)

    const handleChange=(event)=>{
      setTaskName(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        createTask(taskName)
        setTaskName("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={taskName}/>
            <button type='submit'>Add task</button>
        </form>
    </div>
  )
}

export default TodoCreate