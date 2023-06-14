import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import '../App.css'; // Import the CSS file

const TodoItem = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
    </div>
  );
};

export default connect(null, { toggleTodo })(TodoItem);