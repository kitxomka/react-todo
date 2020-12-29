import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


import './singleTodo.styles.css'

const SingleTodo = (props) => {
    
    const listItems = props.items;

    return(
        <div className="wrapper">
            {listItems.map((val, index) => (
            <div key={index} className="todo" id={index + 'todo'}>
                <div>{val}</div>
                <RiCloseCircleLine/>
                <TiEdit/>
            
            </div>
        ))}
        </div>
    )
 
}

export default SingleTodo
