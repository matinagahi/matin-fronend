import React from 'react';

function TodoItem({ todo, onToggleCompleted }) {
  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => onToggleCompleted(todo._id, todo.completed)}
    >
      <div><strong>Description:</strong> {todo.description}</div>
      <div><strong>Importance:</strong> {todo.importance}</div>
      <div><strong>Due Date:</strong> {new Date(todo.dueDate).toLocaleString()}</div>
    </li>
  );
}

export default TodoItem;
