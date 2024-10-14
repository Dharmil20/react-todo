import React from 'react'
import { useState } from 'react';


export default function TodoInput(props) {
    const { handleAddTodo } = props;

    const [todoValue, setTodoValue] = useState('');
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder='Enter ToDo......' />
            <button onClick={() => {
                handleAddTodo(todoValue);
            }}>Add</button>
        </header>
    )
}
