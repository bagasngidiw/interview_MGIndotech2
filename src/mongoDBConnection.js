const { MongoClient } = require('mongodb');


async function connectToMongoDB() {
    const connectString = 'mongodb://localhost:27017'; 
    const client = new MongoClient(connectString);
  
    try {
      await client.connect();
  
      return client.db("mgi_bagas");
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
  
    }
}
  
  module.exports = {
    connectToMongoDB
  };
  