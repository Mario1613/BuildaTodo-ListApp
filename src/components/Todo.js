import React from 'react'

const Todo = ({todo, toggleCompleted, removeTodo}) => {

const handleCheckboxClick=()=>{
    toggleCompleted(todo.id)
}
const handleDelete =()=>{
    removeTodo(todo.id);

}
  return (
    <div style={{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick} />
        <li
            style={{
                color:"white",
                textDecoration:todo.completed? "line-through":null

            }}
        >{todo.task}</li>
        <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default Todo