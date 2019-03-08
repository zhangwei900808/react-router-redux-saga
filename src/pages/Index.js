import React, { Component } from "react";
import { withRouter } from "react-router-dom";

@withRouter
class Index extends Component {
  constructor(props) {
    super(props);
    this._clickMe = this.clickMe.bind(this);
  }
  clickMe = () => {
    this.props.history.push("/todo");
  };
  render() {
    return (
      <div>
        <div onClick={this.clickMe}>Click Me To Todo Page</div>
      </div>
    );
  }
}

export default Index;
