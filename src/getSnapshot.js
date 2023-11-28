import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    console.log("constructor");

    super();
    this.state = { count: 0 };
  }
  handle = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log();
    
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");

    return (
      <div>
        {this.state.count}
        <button onClick={this.handle}>click</button>
      </div>
    );
  }
}
