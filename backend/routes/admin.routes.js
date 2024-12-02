const express = require('express');
const { getAdmins } = require('../controllers/adminController');

const router = express.Router();

router.get('/', getAdmins);

module.exports = router;