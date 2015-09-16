var React  = require('react');
var Image = require('./Image.jsx');
var About    = require('./About.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="All">
                <h2 className="All-title">{this.props.name}</h2>
                <div className="All-body">
                    <Image imgSrc={this.props.image} />
                    <About text={this.props.about} />
                </div>
            </div>
        )
    }
});
