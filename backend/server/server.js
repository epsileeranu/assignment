const express = require('express');
const app = express();
const api = require('./api/api');
const appMiddleware = require('./middleware/appMiddleware');
const makeDatabaseConnection =  require('./util/databaseConnection');

// database connection
makeDatabaseConnection();

// middleware
appMiddleware(app);
app.use('/api', api);
app.use((err, req, res)=>{
  if(err){
    console.log(err.stack)
  }
});


module.exports = app; 


