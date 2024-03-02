import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem';
import './TodoList.css';

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  // Define fetchTodos outside of useEffect so it can be used in toggleCompleted as well
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos', {
        withCredentials: true,
      });
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
      await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !completed }, {
        withCredentials: true,
      });
      fetchTodos(); // Refetch todos to update the state
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div className="todo-list-page">
      <h2>Todo List</h2>
      <AddTodoForm onTodoAdded={fetchTodos} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onToggleCompleted={toggleCompleted} />
        ))}
      </ul>
      <Link to="/archive" className="btn btn-secondary">Archive</Link>
    </div>
  );
}

export default TodoListPage;
