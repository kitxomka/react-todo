import React, {useState} from 'react'
import Todo from './Todo'

const TodoForm = (props) => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([]);

    const handleChange = e => {
        setTodo(e.target.value)
      }

    const addTodo = () => {
        setTodos([
          ...todos,
          {
            id: todos.length,
            text: todo,
            isCompleted: false,
          }
        ])
      }
    
      const onSubmit = e => {
        e.preventDefault()
        if (todo === "") return
        addTodo()
        setTodo("")
      }
    
      const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
      }
    
      const completeTodo = todoId => {
        const updatedTodos = [...todos];
        updatedTodos[todoId].isCompleted = true;
        setTodos(updatedTodos);
        console.log(...todos)
        
      };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id="todo" className="todo-input" onChange={handleChange} value={todo} />
                <button type="submit" className="add-btn">Add</button>
            </form>
            <div className="todo-list">
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
            </div>
        </div>
    )
}

export default TodoForm
