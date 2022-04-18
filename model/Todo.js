const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    desc :{
        type: String,
        required:[true, 'Enter desc of the list']
    },
    createdDate: {
        type: Date,
        required: [true, "Enter create date!"]
    },
    isDone:{
        type: Boolean,
        required: [true, "Enter isDone"]
    },
    
})

const Todo = mongoose.model('todo', TodoSchema)
module.exports = Todo