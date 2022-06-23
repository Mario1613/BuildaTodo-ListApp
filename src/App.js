
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState([]);


 

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed

          }
        }
      })
    )
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter(todo=>todo.id !==id))
  }

  function addTodo(todo){
    setTodos([todo, ...todos])
  }
  console.log(todos)
  return (
    <div className="App">
      <header className='App-header'>
      <p>Todo List</p>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </header>
  
    </div>
  );
}

export default App;
