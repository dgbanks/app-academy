import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Calculator from './calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Tabs tabs={[
          {title: 'One', content: 'something'},
          {title: 'Two', content: 'anything'},
          {title: 'Three', content: 'everything'}
        ]}/>
        <Weather />
        <Autocomplete names={
          ['one', 'two', 'three', 'four', 'five',
          'six', 'seven', 'eight', 'nine', 'ten']
        }/>
        <Calculator />
      </div>
    );
  }
}

export default App;
