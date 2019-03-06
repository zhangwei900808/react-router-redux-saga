import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class TodoPage extends Component {
    render() {
        return (
            <div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
            </div>
        )
    }
}

export default TodoPage;