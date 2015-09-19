var rewire = require('rewire'),
    All = rewire('../src/components/All.jsx'),
    React = require('react'),
    assert = require('assert'),
    reactAddons = require('react/addons'),
    TestUtils = reactAddons.addons.TestUtils,
    assert = require('assert');

describe('All', function () {
      it('Puts text in correct area', function () {

          // Using 'rewire' for mocking
          var mockItem = React.createClass({
            render: function(){
              return (<div className="mock"></div>);
            }
          });
          All.__set__("Image", mockItem);
          All.__set__("About", mockItem);
          All.__set__("Button", mockItem);

          // creates real element in Shadow Rendering
          var shallowRenderer = TestUtils.createRenderer(),
              // allProps = {username: "my username", bio: "Fart", avatar: "plop"};
              props = {name: "my username"};
          shallowRenderer.render(React.createElement(All, props));
          markup = React.renderToStaticMarkup(shallowRenderer.getRenderOutput());

          assert.equal(
            '<div class="All"><h2 class="All-title">my username</h2><div class="All-body"><div class="mock"></div><div class="mock"></div><div class="mock"></div></div></div>',
            markup
          );
          assert.equal(
            'my username',
            shallowRenderer.getRenderOutput().props.children[0].props.children
          );
          // shudnt be tested
          // assert.equal(
          //   'Fart',
          //   shallowRenderer.getRenderOutput().props.children[1].props.children[1].props.text
          // );
      });
});
