// controllers/authController.js
const authService = require('../services/authService');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.uploadProfilePicture = [
  upload.single('profilePicture'),
  async (req, res) => {
    try {
      const updatedUser = await authService.updateProfilePicture(req.user.id, req.file.path);
      res.status(200).json({ message: 'Profile picture uploaded', updatedUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];
