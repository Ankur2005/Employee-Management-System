const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ems');

const userRoutes = require('./routes/users.routes.js');
const adminRoutes = require('./routes/admin.routes.js');

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

