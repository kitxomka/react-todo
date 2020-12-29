import React from 'react'
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';


import './singleTodo.styles.css'

const SingleTodo = (props) => {
    
    const item = props.items.map(function (val, index) {
        return{
            key: index,
            value: val
        } 
    })

    console.log('item', item)
    
    return (
        <>
            <div className="wrapper">
                {item.map((n) => (
                    <div className="todo" key={n.key} >
                        {n.value}
                        
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default SingleTodo
