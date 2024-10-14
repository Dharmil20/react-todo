import React from 'react'

export default function TodoCard(props) {
    const {todos, deleteTodo, index} = props;

    return (
        <div>
            <li className='todoItem'>
                {props.children}
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>{
                    deleteTodo(index)
                }} className="fa-regular fa-trash-can"></i></li>
        </div>

    )
}
