var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({

  getInitialState: function() {
    return {input: ""};
  },

  handleInput: function(event){
    event.preventDefault();
    this.setState({input: event.currentTarget.value});
  },

  render: function() {
    var self = this;
    return (<div>

              <label>Location</label>
              <input type="text" onInput={this.handleInput} value={this.state.input}/>
                <ul className="suggestions">
                  <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>

                  {self.props.thingNames.map(function(el,idx) {
                    var lowerEl = el.toLowerCase();
                    var lowerInput = self.state.input.toLowerCase();
                    if(self.state.input && lowerEl.startsWith(lowerInput)){
                    return (
                            <li key={idx} className={el}>{el}</li>

                          );}
                    })
                  }
                </ReactCSSTransitionGroup>
                </ul>
            </div>);
  }
});//Autocomplete widget


module.exports = Autocomplete;
