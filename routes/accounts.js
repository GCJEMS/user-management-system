// routes/accounts.js
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const users = {}; // In-memory storage

// Helper function to simulate email sending
function sendVerificationEmail(email, token) {
  console.log(`📧 Verification email sent to ${email} with token: ${token}`);
}

// POST /accounts/register
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (users[email]) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const verificationToken = crypto.randomBytes(16).toString('hex');

  users[email] = {
    email,
    password, // NOTE: In real apps, always hash passwords!
    verified: false,
    verificationToken,
  };

  sendVerificationEmail(email, verificationToken);

  res.status(201).json({ message: 'Registration successful. Please verify your email.' });
});

// POST /accounts/verify-email
router.post('/verify-email', (req, res) => {
  const { email, token } = req.body;

  const user = users[email];

  if (!user) return res.status(404).json({ message: 'User not found' });
  if (user.verified) return res.status(400).json({ message: 'Email already verified' });

  if (user.verificationToken === token) {
    user.verified = true;
    return res.json({ message: 'Email verified successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid verification token' });
  }
});

// POST /accounts/authenticate
router.post('/authenticate', (req, res) => {
  const { email, password } = req.body;

  const user = users[email];

  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!user.verified) return res.status(401).json({ message: 'Email not verified' });
  if (user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

  // Simulate JWT token
  const token = crypto.randomBytes(16).toString('hex');

  res.json({ message: 'Authenticated successfully', token });
});

module.exports = router;
