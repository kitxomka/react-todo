import React, {useState, useEffect} from 'react'
import Todo from './Todo'




const useLocalStorageState = (key, deafultValue = '') => {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) || deafultValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]

} 

const TodoForm = (props) => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useLocalStorageState('todos', []);

    const handleChange = e => {
        setTodo(e.target.value)
      }

    const addTodo = () => {
        setTodos([
          ...todos,
          {
            id: todos.length+1,
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
        <>
            {/* <form onSubmit={onSubmit}>
                <input id="todo" className="todo-input" onChange={handleChange} value={todo} />
                <button type="submit" className="add-btn">Add</button>
            </form>
            <div className="todo-list">
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
            </div> */}
        </>
    )
}

export default TodoForm