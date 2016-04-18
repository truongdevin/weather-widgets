var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {selected: 0};
  },

  tabClicked: function(idx) {
    this.setState({selected: idx});
  },
  render: function() {
    var self = this;
    return(
      <div>
        <ul>
          {this.props.titles.map(function(el,idx) {
            var style = '';

            if (self.state.selected === idx) {
              style = 'selected';
            }
            return (
                    <li key={idx} className={style} onClick={self.tabClicked.bind(self, idx)}>{el}</li>
                  );
            })
          }
        </ul>
        <p>{this.props.contents[this.state.selected]}</p>
      </div>
    ); //return
  }
});

module.exports = Tabs;
