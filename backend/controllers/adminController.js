const Admin = require('../models/Admin');

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ message: 'Error fetching admins' });
    }
};

module.exports = {
    getAdmins,
};