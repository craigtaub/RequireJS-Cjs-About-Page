var About = require('../src/components/About.jsx'),
    React = require('react'),
    assert = require('assert'),
    reactAddons = require('react/addons'),
    TestUtils = reactAddons.addons.TestUtils;

describe('About', function () {

    it('Puts text in correct area', function () {

        // can parse markup or scope properties (this.props)
        // can navigate up and down levels and classes/properties
        var shallowRenderer = TestUtils.createRenderer(),
            props = {text: "test block"};
        shallowRenderer.render(React.createElement(About, props));
        markup = React.renderToStaticMarkup(shallowRenderer.getRenderOutput());
        // needs passing valid ReactElement
        assert.equal(
          shallowRenderer.getRenderOutput().props.children.props.children,
          "test block"
        );
        assert.equal(
          '<div class="About"><p class="About-text">test block</p></div>',
          markup
        );


        // normal way using real React. NOT Shadow Rendering.
        // not using addons or testing this.props..needs valid ReactElement, About is function.
        var markup = React.renderToStaticMarkup(<About text="test this" />);
        assert.equal(
          '<div class="About"><p class="About-text">test this</p></div>',
          markup
        );


    });
});
