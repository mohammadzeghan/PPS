

// Import necessary modules
const express = require('express');

// Create an Express application
const app = express();

// Define a sample user list (you can replace this with your actual user data)
const userList = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
];

// Define a middleware function to check if the user is an admin
function isAdmin(req, res, next) {
  // Check if the user is an admin (you can replace this with your authentication logic)
  const isAdmin = req.query.admin === 'true';
  if (isAdmin) {
    next(); // User is an admin, continue to the next middleware
  } else {
    res.status(403).send('Permission denied. You must be an admin.');
  }
}

// Apply the isAdmin middleware to the route for getting the user list
app.get('/users', isAdmin, (req, res) => {
  // Send the user list as JSON
  res.json(userList);
});

// Start the server on port 3000 (or any other port you prefer)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
