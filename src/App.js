import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css'; // Custom CSS for additional styling

function App() {
  // Placeholder functions and data
  const addTodoHandler = (todo) => console.log(todo);
  const toggleCompletedHandler = (id) => console.log(`Toggle todo with id: ${id}`);

  // Sample todos
  const todos = [
    { id: 1, title: "Complete React tutorial", completed: false },
    { id: 2, title: "Write blog post about React", completed: true }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Todo List</h1>
      <AddTodoForm onAdd={addTodoHandler} />
      <TodoList todos={todos} onToggleCompleted={toggleCompletedHandler} />
    </div>
  );
}

export default App;
