var React = require('react');

var Clock = React.createClass({

  getInitialState: function(){
    return {time: new Date};
  },

  componentDidMount: function(){
    this.time = setInterval(this.tick, 1000);
  },

  tick: function(){
    this.setState({time: new Date});
  },

  componentWillUnmount: function(){
    clearInterval(this.time);
  },

  render: function() {
    var timeNow = this.state.time.toString();
    var temp = this.state.time;
    // debugger;
    return <p>{timeNow}</p>;
  }
});//clock widget


module.exports = Clock;
