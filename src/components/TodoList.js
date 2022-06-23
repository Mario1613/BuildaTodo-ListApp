import React from 'react';
import Todo from './Todo';

const TodoList =({todos, toggleCompleted, removeTodo}) => {
  return (
    <ul>
        {todos.map(todo=>(
            
            <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
            
        ))}
    </ul>
  )
}

export default TodoList