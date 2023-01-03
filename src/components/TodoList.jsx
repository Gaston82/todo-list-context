import React from 'react'
import useTodosContext from '../hooks/use-todos-context'
import TodoItem from './TodoItem'




const TodoList = () => {
  const{tasks}=useTodosContext()
  

  return (
    <section>
    {
        tasks.map((task)=>(<TodoItem key={task.id} task={task} />))
    }
    </section>
  )
}

export default TodoList