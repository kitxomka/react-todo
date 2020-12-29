import React from 'react'
import SingleTodo from '../singleTodo/singleTodo.component'

import './todoList.styles.css'

const TodoList = (props) => {

    return (
        <>
            <div className="list-container">
                <SingleTodo items={props.items} id={props.id} />
            </div>
        </>
    )
}

export default TodoList