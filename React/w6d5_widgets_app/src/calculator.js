import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { num1: '', num2: '', operation: '' };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({ num1: e.target.value});
  }

  setNum2(e) {
    e.preventDefault();
    this.setState({ num2: e.target.value });
  }

  setOperation(e) {
    e.preventDefault();
    this.setState({ operation: e.target.value });
  }

  calculate(num1, num2) {
    num1 = parseInt(num1) || 0;
    num2 = parseInt(num2) || 0;
    switch (this.state.operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num1 === 0 || num2 === 0) {
          return '---';
        }
        return num1 / num2;
      default:
        return 0;
    }
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.num1} onChange={e => this.setNum1(e)} />
        <input type="number" value={this.state.num2} onChange={e => this.setNum2(e)} />
        <button value={'+'} onClick={e => this.setOperation(e)}>+</button>
        <button value={'-'} onClick={e => this.setOperation(e)}>-</button>
        <button value={'*'} onClick={e => this.setOperation(e)}>*</button>
        <button value={'/'} onClick={e => this.setOperation(e)}>/</button>
        <button onClick={() => this.setState({ num1:'', num2:'', operation:''})}>Clear</button>
        <h1>{this.calculate(this.state.num1, this.state.num2)}</h1>
      </div>
    );
  }
}

export default Calculator;
