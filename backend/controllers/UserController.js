const User = require('../models/User');
const bcrypt = require('bcryptjs');

const UserController = {
  async register(req, res) {
    try {
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      const userExists = await User.findOne({ username: req.body.username });
      if (userExists) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = new User({
        username: req.body.username,
        password: hashedPassword
      });

      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },

  async login(req, res) {
    try {
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = UserController;