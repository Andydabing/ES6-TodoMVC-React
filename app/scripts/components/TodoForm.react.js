/** @jsx React.DOM */
var React = require('react');
var TodoActions = require('../actions/TodoActions');

class TodoForm {

	_onSave (event) {
		event.preventDefault();
		TodoActions.create(this.refs.input.getDOMNode().value);
		this.refs.input.getDOMNode().value = '';
	}
	render () {
		return (
			<form onSubmit={this._onSave}>
				<input ref="input" />
			</form>
		)
	}
}

module.exports = React.createClass(TodoForm.prototype);