var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="About">
                <p className="About-text">{this.props.text}</p>
            </div>
        )
    }
});
