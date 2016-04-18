var React = require('react');
// var XMLHttpRequest = require('xmlhttprequest');
var Weather = React.createClass({

  getInitialState: function(){
    return {latitude: "", longitude: "", temperature: "", weather: ""};
  },

  componentDidMount: function(){
    console.log("component mounted");
    this.getCoordinates(this.getWeather);
    // this.getWeather();
  },

  getCoordinates: function(getWeatherCallback){
    var self = this;
    function success(pos){
      self.setState({latitude: pos.coords.latitude});
      self.setState({longitude: pos.coords.longitude});
      getWeatherCallback();
      return pos.coords;
    }

    function error(err){
      alert("NOOooooo");
    }

    navigator.geolocation.getCurrentPosition(success, error);
  },

  getWeather: function(){
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+this.state.latitude+"&lon="+this.state.longitude+"&APPID=645c5d39c7603f17e23fcaffcea1a3c1";
    var request = new XMLHttpRequest();
    var self = this;

    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        self.setState({temperature: (data.main.temp-273.15).toFixed(2)});
        self.setState({weather: (data.weather[0].description)});
      } else {
        alert("REQUEST REACHED SERVER, BUT WEATHER ERRORRRRR!!!");
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      alert("BEFORE SERVER ERROR. AAAAAH!");
    };
    request.send();
  },

  render: function() {
    return (<div><p>Latitude: {(this.state.latitude)}</p>
  <p>Longitude: {(this.state.longitude)}</p>
  <p>Temperature(C): {this.state.temperature}</p>
  <p>Weather: {this.state.weather}</p>
    </div>);
  }
});//weather widget


module.exports = Weather;
