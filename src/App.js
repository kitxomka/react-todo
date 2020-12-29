import React, {useState} from 'react'

import Header from './components/header/header.component'
import TodoForm from './components/todoForm/todoForm.component'
import TodoList from './components/todoList/todoList.component'

import './App.css'


function App() {
  const [items, setItems] = useState([]);
  let id = Math.floor(Math.random() * 10000)

  // console.log('items: ', items);

  return (
    <div className="container">
      <Header />
      <TodoForm setItems={setItems} items={items} />
      {/* {items.join(', ')} */}
      <TodoList items={items} id={id} />
    </div>
  );
}

export default App;
