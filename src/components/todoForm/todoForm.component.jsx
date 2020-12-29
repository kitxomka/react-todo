import React, {useState, useEffect, useRef} from 'react'

import './todoForm.styles.css'




const TodoForm = (props) => {

    const [input, setInput] = useState('');
    
    
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
     })


    const handelSubmit = e => {
        e.preventDefault();

        let newItems = Object.assign([], props.items);
        newItems.push(input);
        props.setItems(newItems);

        setInput('');

    }

    const handleChange = e => {
        setInput(e.target.value);
    } 
     
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input type='text' placeholder = "New Task" value={input} onChange={handleChange} ref={inputRef}/>
                <button  onClick={handelSubmit}>Add Task</button>
            </form>
        </>
    )
}

export default TodoForm
