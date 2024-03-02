import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import '../pages/TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
      setError('Failed to fetch todos. Please try again later.');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleCompleted = async (id, completed) => {
    try {
      await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div className="todo-list-page">
      <h2>Todo List</h2>
      <AddTodoForm onTodoAdded={fetchTodos} />
      {error && <p className="alert alert-danger">{error}</p>}
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onToggleCompleted={toggleCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
