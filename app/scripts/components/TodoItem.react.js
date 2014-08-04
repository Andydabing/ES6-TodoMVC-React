/** @jsx React.DOM */
var React = require('react');
var TodoActions = require('../actions/TodoActions');
const ENTER_KEY_CODE = 13;



class TodoItem {

	getInitialState () {
		return {edit: false, value: this.props.todo.get('title')}
	}

	onEdit (e) {
		this.setState({edit: true, value: this.props.todo.get('title')});
	}

	_onKeyDown (e) {
		if (e.keyCode === ENTER_KEY_CODE) {
			this._save();
			this.setState({edit: false});
		}
	}

	_onChange (e) {
		this.setState({value: e.target.value});
	}

	_save () {
		TodoActions.updateText(this.props.todo.get('id'), this.state.value);
	}

	render () {

		return (
			<div key={this.props.key} onDoubleClick={this.onEdit}> 
				<li ref="item">{this.state.edit === true ? <input onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} /> : this.props.todo.get('title')}</li>
				
			</div>
		)
	}
}

module.exports = React.createClass(TodoItem.prototype);