import TodoItem from './TodoItem';

function TodoList({ todos, onToggleCompleted }) {
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggleCompleted={onToggleCompleted} />
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  