// controllers/userController.js
const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { name, email, socialHandles, profilePicture, uniqueUserID } = req.body;
    const user = new User({ name, email, socialHandles, profilePicture, uniqueUserID });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
    try {
      // Fetch up to 10 users
      const users = await User.find().limit(10);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const filter = req.query;
        console.log(filter)
        const user = await User.findOne(filter);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };

  exports.deleteUserById = async (req, res) => {
    try {
        const filter = req.query;
        console.log(filter)
        const user = await User.findOne(filter);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.remove();
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };