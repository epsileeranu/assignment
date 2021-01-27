const config = require('../config/config');
const mongoose = require('mongoose');
const seedDatabase = require('./seedDatabase');


const makeDatabaseConnection = ()=>{

  // config.dbURI is different depending on NODE_ENV
  const dbURI = config.dbURI;

  const dbConnection = mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((connection)=>{
      console.log(`Connected to ${dbURI}`);
      return connection;
    })
    .then(()=>{
      if(config.isSeedDatabase){
        seedDatabase();
      }
    })
    .catch((error)=>{
      console.log('Mongoose connection error to', dbURI, error);
    });
  
  return dbConnection;
};

module.exports = makeDatabaseConnection;