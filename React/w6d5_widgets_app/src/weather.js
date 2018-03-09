import React from 'react';
import { OpenWeatherMapKey } from './weather_api';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
          this.setState({ weather: JSON.parse(request.responseText)});
        }
      };
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/weather?APPID=${
          OpenWeatherMapKey
        }&lat=${
          position.coords.latitude
        }&lon=${
          position.coords.longitude
        }`,
        true
      );
      request.send();
      // console.log('position', position);
      // return [position.coords.latitude, position.coords.longitude];
    });
  }

  render() {
    if (this.state.weather) {
      const weather = this.state.weather;
      console.log(this.state.weather);
      return (
        <div>
          <h1>{weather.name} Weather</h1>
        </div>
      );
    } else {
      return <div>Fetching weather data...</div>;
    }
  }
}

export default Weather;
