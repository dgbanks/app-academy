import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      return [position.coords.latitude, position.coords.longitude];
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Weather;
