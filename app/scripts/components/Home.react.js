/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var TodoStore = require('../stores/TodoStore');
var TodoList = require('./TodoList.react');
var TodoForm = require('./TodoForm.react');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}


class Home {

	getInitialState () {
		return getTodoState();
	}

	componentDidMount () {
		TodoStore.on('all', this._onChange);
	}

	componentWillUnmount () {
		TodoStore.off('all', this._onChange);
	}

	_onChange () {
		this.setState(getTodoState());
	}

	render () {
		return (
			<div>
				<h1>Home</h1>
				<span>{"Todos: " + this.state.allTodos.length}</span>
				<TodoList todos={this.state.allTodos} />
				<TodoForm />
				<Link to="about">About</Link>
			</div>
		)
	}
}

module.exports = React.createClass(Home.prototype);