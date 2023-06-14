import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import '../App.css'; // Import the CSS file

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);