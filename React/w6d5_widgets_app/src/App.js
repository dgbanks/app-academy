import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

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
      </div>
    );
  }
}

export default App;
