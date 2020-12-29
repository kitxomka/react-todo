import React, {useState} from 'react'

import './todoForm.styles.css'




const TodoForm = (props) => {
    const [input, setInput] = useState('')

    console.log('TodoForm props: ', props);

    const handelSubmit = e => {
        e.preventDefault()
        console.log('clicked')
        console.log({input})
        debugger;
        let newItems = Object.assign([], props.items);
        newItems.push(input)
        props.setItems(newItems)
        
    }

    const handleChange = e => {
        setInput(e.target.value)
    } 
     
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input type='text' placeholder = "New Task" value={input} onChange={handleChange}/>
                <button  onClick={handelSubmit}>Add Task</button>
            </form>
        </>
    )
}

export default TodoForm
