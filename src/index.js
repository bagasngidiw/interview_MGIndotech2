const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const { connectToMongoDB } = require('./mongoDBConnection');
dotenv.config();

// express app
const app = express()

// middleware
app.use(express.json())

const port = process.env.PORT
app.use(cors())

const userRoutes = require('./Route/User')


// connect to db
connectToMongoDB()
  .then((database) => {
    // Set mongoose to use the connected database
    mongoose.connect(process.env.MONGO_URI, { dbName: database.databaseName });

    // Listen for requests
    app.listen(port, () => {
      console.log(`Server running in port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


//user Route 
app.use('/user', userRoutes)
