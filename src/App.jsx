import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from 'react';

function App() { //Function name always capitalized
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
  }

  function deleteTodo(key){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== key
    })
    setTodos(newTodoList);
  }

  function handleEditTodo(key){
    const valueToBeEdited = todos[key];
    setTodoValue(valueToBeEdited);
    deleteTodo(key);
  }

  return (
    <>
      < TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      < TodoList handleEditTodo={handleEditTodo} deleteTodo={deleteTodo} todos={todos}/>

      {/* It returns JSx; JS is run inside curly braces just like this comment */}
    </>
  )
}

export default App
