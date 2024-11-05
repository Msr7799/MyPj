// services/authService.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({
    username: data.username,
    email: data.email,
    password: hashedPassword,
  });
  return await user.save();
};

exports.loginUser = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
