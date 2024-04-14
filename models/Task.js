const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false},
    owner: {
        
    }
})




const Task = mongoose.model('Task', taskSchema);
module.exports = Task;