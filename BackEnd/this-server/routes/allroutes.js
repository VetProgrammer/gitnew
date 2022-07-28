// file allroutes.js  
const express = require('express');
const router = express.Router();
// imports to implement api's
var bodyParser = require('express');
var cors = require('cors');
const app = express();  // to create an object of express
const dboperations = require('../dbfiles/dboperations')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

router.use((request, response, next) => {
  console.log('middleware');   // for authentication software etc
  console.log(request.body);
  next();  
})

router.route('/contacts').get((request, response)=> {
  dboperations.getContacts().then(result => {
       console.log(result);
       response.json(result);
   })
})

router.route('/contacts/:contactId').get((request, response)=> {
  dboperations.getThisContact(request.params.contactId).then(result => {
     response.send(result);
   //   response.json(result);
  })
})

router.route('/contacts').post((request, response)=> {
  console.log(request.body.firstName, request.body.lastName, request.body.emailAddr);
 let contact = request.body 
     dboperations.addContact(contact).then(result => {
     response.status(201).json(result); 
     })
})




router.route('/user').get((request, response)=> {
        console.log(" console    This is your first routed api call");
        response.send(" This is your first routed api call");
    })

    router.route('/test').get((request, response)=> {
      console.log(" console    This is a call to test");
      response.send(" This is a test");
  })

module.exports = router;    // export all of the routes
