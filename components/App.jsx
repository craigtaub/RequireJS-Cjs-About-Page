/** @jsx React.DOM */
var React   = require('react');
var All = require('./All.jsx');

React.render(
    <All
        name="Craig T"
        about="React component BIO text"
        image="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
    />,
    document.body);
