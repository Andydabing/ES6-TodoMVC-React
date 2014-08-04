var Backbone = require('backbone');
var TodoModel = require('./TodoModel');

var LocalStorage = require("backbone.localstorage");
class TodoCollection extends Backbone.Collection {
  constructor (options) {
    this.model = TodoModel;
    this.localStorage = new LocalStorage('todos');
    super(options);
  }

  getAll () {
    return this.models;
  }

  nextId () {
  	return "c" + this.toJSON().length + 1;
  }
}

module.exports = TodoCollection;