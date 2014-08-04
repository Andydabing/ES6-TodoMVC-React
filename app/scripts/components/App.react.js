/** @jsx React.DOM */
var React = require('react');

class App {
	render () {
		return (
			<div>
				<this.props.activeRouteHandler />
			</div>
		)
	}
}

module.exports = React.createClass(App.prototype);