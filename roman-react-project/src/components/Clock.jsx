import React from "react";
import ReactDOM from "react-dom/client";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <h1 className="heading" tabIndex={0}>
        <span className="text">
          Hello Roman {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

// const ClockComponent = new Clock();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Clock locale="bn-BD" />);

export default Clock;
