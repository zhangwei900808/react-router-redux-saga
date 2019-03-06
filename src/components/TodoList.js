import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
// import { VISIBILITY_FILTERS } from "../redux/constants";

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

@connect(mapStateToProps)
class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, index) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : "No todos, yay!"}
      </ul>
    );
  }
}

export default TodoList;
