import React from 'react'

import Header from './components/Header'
import TodoForm from './components/TodoForm'

import './App.css'


function App() {
  
  return (
    <div className="home">
      <Header/>
      <TodoForm/>
    </div>
  );
}

export default App;
