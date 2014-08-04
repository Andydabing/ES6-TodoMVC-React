var AppDispatcher = require('../../dispatchers/AppDispatcher');
var TodoConstants = require('../../constants/TodoConstants');
var TodoCollection = require('./TodoCollection');

var _todos = new TodoCollection();
//fetch from server/localstorage
_todos.fetch();

AppDispatcher.on('all', (eventName, payload) => {
  var text;

  switch(eventName) {
    case TodoConstants.TODO_CREATE:
      text = payload.text.trim();
      if (text !== '') {
        _todos.create({title: text});
      }
      break;

    case TodoConstants.TODO_UPDATE_TEXT:
      text = payload.text.trim();
      var id = payload.id;
      if (text !== '') {
        _todos.get(id).save({title: text});
      }
      break;
    default:
      return;
  }

});

module.exports = _todos;