import React, { useState } from 'react';
import axios from 'axios';

function AddTodoForm({ onTodoAdded }) {
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState('not important');
  const [dueDate, setDueDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoItem = { description, importance, dueDate };

    try {
      // Since we're using sessions, axios automatically sends the session cookie
      // No need to manually include the token in the request headers
      await axios.post('http://localhost:5000/api/todos', todoItem, { withCredentials: true });
      setDescription('');
      setImportance('not important');
      setDueDate('');
      if(onTodoAdded) onTodoAdded(); // Refresh the todo list
    } catch (error) {
      console.error('Error adding todo:', error);
      setErrorMessage('Failed to add todo. Please try again.');
    }
  };

  return (
    <div className="add-todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
        >
          <option value="not important">Not Important</option>
          <option value="mid important">Mid Important</option>
          <option value="important">Important</option>
        </select>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
}

export default AddTodoForm;
