var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var About = require('About');
var Main = require('Main');
var Weather = require('Weather');
var Examples = require('Examples')

var objOne = {
  name: 'Andrew',
  location: 'Philadelphia'
};

var objTwo = {
  age: 25,
//  ...objOne
};
console.log(objTwo);

// require custom css
require('style!css!sass!applicationStyles');
// require foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path = "/" component = {Main}>
          <Route path = "about" component = {About} />
          <Route path = "examples" component = {Examples} />
          <IndexRoute component = {Weather} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
