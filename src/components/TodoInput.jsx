import React from 'react'
import { useState } from 'react';


export default function TodoInput(props) {
    const { handleAddTodo } = props;

    let [todoValue, setTodoValue] = useState('');
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder='Enter ToDo......' />
            <button onClick={() => {
                handleAddTodo(todoValue);
                setTodoValue('');
            }}>Add</button>
        </header>
    )
}
