/** @jsx React.DOM */
var React = require('react');
var TodoItem = require('./TodoItem.react');

class TodoList {
	render () {
		let todos = this.props.todos.map((todo) => {
			return <TodoItem key={todo.cid} todo={todo} />
		});
		return (
			<ul>
				{todos}
			</ul>
		)
	}
}

module.exports = React.createClass(TodoList.prototype);