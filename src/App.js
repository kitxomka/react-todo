import {React, useState} from 'react'

import { CssBaseline, Container } from '@material-ui/core'

import Header from './components/Header.jsx'
import TodoList from './components/TodoList.jsx'
import FormDialog from './components/FormDialog.jsx'

import './App.css'



function App() {

  const [todos, setTodos] = useState([
    {
      val: 'todo 1',
      priority: 'hight',
      due: '12th June',
    },
    {
      val: 'todo 2',
      priority: 'medium',
      due: '12th May',
    },
    {
      val: 'todo 3',
      priority: 'low',
      due: '12th Feb',
    },
  ]);

  const handleFabClick = () => {
    console.log('click')
  }

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  
  return (
      < >
        <CssBaseline />
          <Container maxWidth="sm" style={{}}>
            <Header handleFabClick={handleDialogOpen}/>
            <TodoList todos={todos} />
          </Container>
        <FormDialog open={dialogOpen} handleClose={handleDialogClose}/>
      </>
    
  );
}

export default App;
