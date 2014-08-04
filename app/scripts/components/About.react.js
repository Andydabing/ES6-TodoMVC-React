/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

class About {
	render () {
		return (
			<div>
				<h1>About</h1>
				<Link to="home">Home</Link>
			</div>
		)
	}
}

module.exports = React.createClass(About.prototype);