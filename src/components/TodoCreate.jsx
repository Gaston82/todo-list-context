import React, {  useState } from 'react'
import useTodosContext from '../hooks/use-todos-context'


const TodoCreate = () => {

    const [taskName,setTaskName]=useState("")

    const{createTask}=useTodosContext()
    

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