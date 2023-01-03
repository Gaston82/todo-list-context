import React, { useContext } from 'react'
import TodosContext from '../context/todos'
import TodoItem from './TodoItem'

const TodoList = () => {
  const{tasks}=useContext(TodosContext)
  return (
    <section>
    {
        tasks.map((task)=>(<TodoItem key={task.id} task={task} />))
    }
    </section>
  )
}

export default TodoList