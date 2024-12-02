const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    password: String,
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;