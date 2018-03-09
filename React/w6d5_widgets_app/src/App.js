import React, { Component } from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Calculator from './calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="time-weather">
          <Clock />
          <Weather />
        </div>
        <div className="tools">
          <Tabs tabs={[
            {title: 'One', content: 'something'},
            {title: 'Two', content: 'anything'},
            {title: 'Three', content: 'everything'}
          ]}/>
          <Autocomplete names={
            ['one', 'two', 'three', 'four', 'five',
            'six', 'seven', 'eight', 'nine', 'ten']
          }/>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
