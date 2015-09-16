var React = require('react');

module.exports = React.createClass({
    render: function() {
        var imgStyle = {
            height: 100
        };
        return (
            <div className="Image">
                <img className="Image-img" style={imgStyle} src={this.props.imgSrc} alt="" />
            </div>
        )
    }
});
