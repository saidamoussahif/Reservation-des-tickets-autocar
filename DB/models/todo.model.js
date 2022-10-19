const {Schema, model} = require("mongoose") 

const todoSchema = new Schema({
    Title: {type: String},
    Description: {type: String},
})

module.export = model("todo", todoSchema)