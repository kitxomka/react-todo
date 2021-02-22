import {React, useState, useEffect} from 'react'
import uuid from 'react-uuid'

import { CssBaseline, Container } from '@material-ui/core'
import { useFormik  } from 'formik'

import Header from './components/Header.jsx'
import TodoList from './components/TodoList.jsx'
import FormDialog from './components/FormDialog.jsx'

import './App.css'



function App() {

  
  const [todos, setTodos] = useState([{id: 1, val: 'todo app', priority: 'High', dueDate:'2021-02-25'}])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editTodo, setEditTodo] = useState({})


  useEffect(() => {
    if(editMode){
      formik.values.todoText = editTodo.val
      formik.values.priority = editTodo.priority
      formik.values.dueDate = editTodo.dueDate
    }else{
      formik.resetForm()
      formik.values.todoText = ''
      formik.values.priority = 'Low'
      formik.values.dueDate = getCurrentDate()
    }
  }, [editMode])

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
    if(editMode) setEditMode(false)
  }

  const getCurrentDate = () => {
    const now = new Date()
    return now.toISOString().slice(0, 10)
  }

  const formik = useFormik({
    initialValues: {
        todoText: '',
        priority: 'Low', 
        dueDate: getCurrentDate(),
    }
  })

  const handleSubmit = (e, resetForm) => {
    const {todoText, priority, dueDate} = formik.values
    if(!editMode){
      setTodos([
      ...todos,
      {
        id: uuid(),
        val: todoText,
        priority: priority,
        dueDate: dueDate,
      }
    ])
    }else {
      const newTodos = [...todos]
      const t = newTodos.find(t => t.id === editTodo.id)
      t.val = todoText
      t.priority = priority
      t.dueDate = dueDate
      setEditMode(false)
      setEditTodo({})
      setTodos(newTodos)
    }
    
    setDialogOpen(false)
    formik.resetForm()
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
        console.log(todos)
        console.log(updatedTodos)
  }

  const handeleEdit = (todo) => {
    setDialogOpen(true)
    setEditMode(true)
    setEditTodo(todo)
    
  }

  const handeleDone = (todo) => {
    const newTodos = [...todos]
    const t = newTodos.find(t => t.id = todo.id)
    t.done = !t.done
    setTodos(newTodos)
  }

  return (
      < >
        <CssBaseline />
          <Container maxWidth="sm" style={{}}>
            <Header handleFabClick={handleDialogOpen}/>
            <TodoList todos={todos} handleDelete={handleDelete} handeleEdit={handeleEdit} handeleDone={handeleDone}/>
          </Container>
        <FormDialog open={dialogOpen} handleClose={handleDialogClose} handleSubmit={handleSubmit} formik={formik} editMode={editMode}/>
      </>
    
  );
}

export default App;
