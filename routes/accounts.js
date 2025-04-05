const express = require('express');
const router = express.Router();
const crypto = require('crypto');

let users = {};  // In-memory storage (use a real DB in production)
let passwordResetTokens = {};  // Store reset tokens temporarily

// Helper function to simulate email sending
function sendResetEmail(email, token) {
  console.log(`📧 Password reset email sent to ${email} with token: ${token}`);
}

// POST /accounts/forgot-password
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  const user = users[email];
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const resetToken = crypto.randomBytes(16).toString('hex');
  passwordResetTokens[email] = resetToken;

  sendResetEmail(email, resetToken);

  res.json({ message: 'Password reset email sent' });
});

// POST /accounts/reset-password
router.post('/reset-password', (req, res) => {
  const { email, token, newPassword } = req.body;

  const user = users[email];
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Check if the token matches
  if (passwordResetTokens[email] !== token) {
    return res.status(400).json({ message: 'Invalid reset token' });
  }

  // Update password
  user.password = newPassword;
  delete passwordResetTokens[email];  // Clear the token once it's used

  res.json({ message: 'Password reset successfully' });
});

// CRUD routes for /accounts

// GET /accounts - Get all accounts
router.get('/accounts', (req, res) => {
  res.json(Object.values(users));  // Return an array of all users
});

// GET /accounts/:id - Get a specific account by ID (email in this case)
router.get('/accounts/:id', (req, res) => {
  const { id } = req.params;
  const user = users[id];

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// PUT /accounts/:id - Update account by ID (email)
router.put('/accounts/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const user = users[id];
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user's password or other fields
  user.password = password;

  res.json({ message: 'Account updated successfully', user });
});

// DELETE /accounts/:id - Delete account by ID (email)
router.delete('/accounts/:id', (req, res) => {
  const { id } = req.params;
  const user = users[id];

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  delete users[id];  // Delete user from in-memory storage

  res.json({ message: 'Account deleted successfully' });
});

module.exports = router;
