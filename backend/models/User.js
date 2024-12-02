const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    password: String,
    tasks: [
        {
            title: String,
            description: String,
            date: String,
            category: String,
            active: Boolean,
            newTask: Boolean,
            completed: Boolean,
            failed: Boolean,
        },
    ],
    taskNumbers: {
        active: Number,
        newTask: Number,
        completed: Number,
        failed: Number,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;