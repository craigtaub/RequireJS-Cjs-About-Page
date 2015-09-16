require('node-jsx').install({ extension: '.jsx' }); // JSX transformation
var React = require('react');

var componentAll = React.createFactory(require('./components/All.jsx'));

module.exports = function(app){

    app.get('/', function (req, res) {

        var all = componentAll({
                name: "Taub C",
                about: "SERVER component BIO text",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
            }),
            markup = React.renderToString(all); // <All> errors

        res.render('index', { markup: markup});
    });

};
