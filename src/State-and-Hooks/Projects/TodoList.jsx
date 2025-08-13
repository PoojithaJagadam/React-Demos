import React, {useState} from 'react'

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] =useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    }
    const handleChange =(e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
       <h1>Todo List</h1>
       <form onSubmit={handleSubmit}> 
            <input type="text" value = {inputValue} onChange={handleChange} placeholder="Add a new Todo" />
            <button type="submit">Add Todo</button>
       </form>

       <ul>
        {items.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
       </ul>
    </div>
  )
}

export default TodoList