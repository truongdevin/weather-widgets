var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./clock');
var Weather = require('./weather');
var Autocomplete = require('./autocomplete');


var Widgets = React.createClass({


  render: function () {
    var names =["San Francisco", "San Mateo", "San Bruno", "Bangalore", "Los Angeles"];
    var tabTitles = ["title1", "devin", "teja"];
    var tabContents = ["content1", "paleboy", "blah"];

    return(
      <div>
        <Tabs titles={tabTitles}
              contents={tabContents}/>
        <Clock/>
        <Weather/>
        <Autocomplete thingNames={names}/>
      </div>
    );
  },
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('widgets'));
});
