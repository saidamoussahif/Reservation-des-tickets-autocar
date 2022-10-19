const {insert, find} = require("../DB")
const todoSchema = require("../DB/models/todo.model")
const addTodoFactory = require("./add-todo")

const addTodo = addTodoFactory(todoSchema, insert)

module.exports = {
    addTodo
}