import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

const Todo = ({todos, removeTodo, completeTodo }) => {

    const todoHtml = todos.map((todo) => {
        return (
            <div key={todo.id}>
              <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
                {todo.text}
              </div>
              <button onClick={() => completeTodo(todo.id)}>Complete</button>
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
            </div>
        )
    })

    return (
        <div>
           {todoHtml}  
        </div>
    )
}
export default Todo
