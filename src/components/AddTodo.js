import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import todoActions from "../redux/actions/todo";

@withRouter
@connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        addTodo: todoActions.addTodo
      },
      dispatch
    )
)
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  updateInput = input => {
    this.setState({
      input
    });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({
      input: ""
    });
  };
  back = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />{" "}
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo{" "}
        </button>{" "}
        <button className="add-todo" onClick={this.back}>
          返回
        </button>{" "}
      </div>
    );
  }
}

export default AddTodo;
