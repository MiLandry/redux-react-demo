import React from "react";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.name = "Mike";
    this.state = {
      clicks: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  render() {
    return (
      <div>
        <p>This is the Counter component! The button was clicked { this.state.clicks } times.</p>
      </div>
    );
  }
}
