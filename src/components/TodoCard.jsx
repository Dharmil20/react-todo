import React from 'react'

export default function TodoCard(props) {
    return (
        <div>
            <li className='todoItem'>
                {props.children}
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i></li>
        </div>

    )
}
