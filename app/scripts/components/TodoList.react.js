/** @jsx React.DOM */
var React = require('react');
var TodoItem = require('./TodoItem.react');

class TodoList {
	render () {
		let todos = this.props.todos.toJSON().map((todo) => {
			return <TodoItem key={todo.id} todo={todo} />
		});
		return (
			<ul id="todo-list">
				{todos}
			</ul>
		)
	}
}

module.exports = React.createClass(TodoList.prototype);