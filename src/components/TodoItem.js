function TodoItem({ todo, onToggleCompleted }) {
    return (
      <li
        className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}
        onClick={() => onToggleCompleted(todo.id)}
        style={{ cursor: 'pointer' }}
      >
        {todo.title}
      </li>
    );
  }
  
  export default TodoItem;
  