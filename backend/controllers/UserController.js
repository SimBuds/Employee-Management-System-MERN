const User = require('../models/User');
const bcrypt = require('bcryptjs');

const UserController = {
  async register(req, res) {
    try {
      // Validate request data
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      // Check if a user with the same username already exists
      const userExists = await User.findOne({ username: req.body.username });
      if (userExists) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create a new user
      const user = new User({
        username: req.body.username,
        password: hashedPassword
      });

      // Save the new user to the database
      await user.save();

      // Send success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // Handle server error
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },

  async login(req, res) {
    try {
      // Validate request data
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      // Find the user by username
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      // Send success response
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      // Handle server error
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = UserController;