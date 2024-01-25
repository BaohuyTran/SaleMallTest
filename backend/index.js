const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your frontend's origin
  credentials: true,
}));
app.use('/api/v1/users', userRoute);
app.use('/api/v1/product', productRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the application that is not named yet...');
})

const port = 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port}`);
});

mongoose.connect(uri)
  .then(() => console.log('MongoDB connection established'))
  .catch((error) => console.log('MongoDB connection failed:', error.message));
