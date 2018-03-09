import React from 'react';

class Autocomplete extends React.Component {
  constructor() {
    super();
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }

  render() {
    console.log(this.state.input);
    return (
      <div>
        <input value={this.state.input} onChange={e => this.handleChange(e)}/>
        <ul style={{listStyleType: 'none'}}>
          {
            this.props.names.map((name, i) => {
              if (name.includes(this.state.input)) {
                return (
                  <li key={i} onClick={() => this.setState({ input: name })}>
                  {name}
                  </li>
                );
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
