import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return (
      <div style={{border: "1px solid red"}}>
        <h1>This is a clock</h1>
        <h3>{`${
          hours < 10 ? '0' + hours : hours
        }:${
          minutes < 10 ? '0' + minutes : minutes
        }:${
          seconds < 10 ? '0' + seconds : seconds
        }`}</h3>
      </div>
    );
  }
}

export default Clock;
