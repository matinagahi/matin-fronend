import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Archive.css'; // Ensure the path is correct based on your project structure

function Archive() {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchCompletedTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos/completed', {
          withCredentials: true,
        });
        setCompletedTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch archived todos:', error);
      }
    };

    fetchCompletedTodos();
  }, []);

  return (
    <div className="archive-container">
      <h2>Archived Tasks</h2>
      <ul className="archive-list">
        {completedTodos.map(todo => (
          <li key={todo._id} className="archive-item">
            <span>{todo.description}</span>
            <span>{todo.importance}</span>
            <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
