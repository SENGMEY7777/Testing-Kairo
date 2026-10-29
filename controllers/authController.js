import { authService } from '../services/authService.js';

export const authController = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Please provide name, email, and password.'
        });
      }

      const user = await authService.register(name, email, password);

      return res.status(201).json({
        success: true,
        message: 'User registered successfully.',
        data: user
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message || 'Registration failed.'
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Please provide email and password.'
        });
      }

      const result = await authService.login(email, password);

      return res.status(200).json({
        success: true,
        message: 'Login successful.',
        data: result
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error.message || 'Authentication failed.'
      });
    }
  },

  async getProfile(req, res) {
    try {
      const userId = req.user.id;
      const userProfile = await authService.getUserProfile(userId);

      return res.status(200).json({
        success: true,
        message: 'Profile retrieved successfully.',
        data: userProfile
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message || 'User not found.'
      });
    }
  }
};
