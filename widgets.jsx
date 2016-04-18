var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./clock');
var Weather = require('./weather');


var Widgets = React.createClass({

  render: function () {
    var tabTitles = ["title1", "devin", "teja"];
    var tabContents = ["content1", "paleboy", "blah"];

    return(
      <div>
        <Tabs titles={tabTitles}
              contents={tabContents}/>
        <Clock/>
        <Weather/>
      </div>
    );
  },
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('widgets'));
});
