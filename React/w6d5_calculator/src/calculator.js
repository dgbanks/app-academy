import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: 0 };
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
