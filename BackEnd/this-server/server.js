const express = require('express');   // import express
const cors = require('cors');      // import   cors
const allroutes = require('./routes/allroutes');
const API_PORT = process.env.PORT || 5000;  // Run the server on Port 5000
const app = express();                // activate express as ‘app’
const bodyParser = require('body-parser'); // for parsing HTTP requests
const morganMonitor = require('morgan'); // for printing the HTTP method

app.use(cors());  // activate   CORS  
app.use(morganMonitor('tiny'));  // activate the monitor

// activate the body-Parser to parse the BODY of Http: PUT statements
   app.use(bodyParser.urlencoded({
       extended: true,})
       );
    
   app.use(bodyParser.json());
    
// activate router for the api's 
app.use(allroutes);

// activate the server
app.listen(API_PORT, ()=> { console.log(`LISTENING on port ${API_PORT}`) });
