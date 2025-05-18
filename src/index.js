const express = require('express');
const userRoutes = require('./routes/user.routes');

const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to WattApp API' });
});

// Register all routes
router.use('/users', userRoutes);
// Add more routes as needed: router.use('/energy', energyRoutes);

module.exports = router;