const express = require('express');
const userRoutes = require('./src/routes/user.routes');

// Create the main router
const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to WattApp API' });
});

// Register all routes
router.use('/users', userRoutes);
// Add more routes as needed: router.use('/energy', energyRoutes);

// Create Express app and use the router
const app = express();
app.use(express.json());
app.use('/', router);

// Set port and listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = router; // Export router for other modules