// Entry point of the application
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Setup express app
const app = express();

// Connect to MongoDB which is running locally
mongoose.connect('mongodb://admin:password@localhost:27017/mongodb-fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Middleware to enable CORS
app.use(cors());

// Middleware to parse the request body
app.use(bodyParser.json());

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Setup Routes
app.use('/api/user', userRoutes);
app.use('/api/employees', employeeRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});