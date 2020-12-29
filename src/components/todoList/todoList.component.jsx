import React from 'react'
import SingleTodo from '../singleTodo/singleTodo.component'

import './todoList.styles.css'

const TodoList = (props) => {
    console.log('TodoList props: ', props.items);
    return (
        <>
            <div className="list-container">
                <SingleTodo items/>
            </div>
        </>
    )
}

export default TodoList
