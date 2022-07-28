import './App.css';
import React, { Component} from "react";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import axios from 'axios';

class App extends Component {

  constructor(props){
     super(props)
    this.state= { 
     FnameTemp: "",
     LnameTemp: "",
     EmailTemp: "",
     MholderTemp:" "
   }
  }


      getFname= (val) =>  {
        console.log("Event: ", val.target.value);
        this.setState( { FnameTemp: val.target.value });
      }
      
      getLname= (event) =>  {
        this.setState( {LnameTemp: event.target.value });
      }

      getEmail= (val) =>  {
        this.setState( { EmailTemp: val.target.value });
      }

      getMholder= (val) =>  {
        this.setState( { MholderTemp: val.target.value });
      }
    

      handleSubmit = event =>{
        event.preventDefault();

        console.log(" Button   Pressed----------------------      makePost");
      
        let data = { 

               firstName: this.state.FnameTemp, 
               lastName:  this.state.LnameTemp, 
               emailAddr: this.state.EmailTemp,
               messageHolder: this.state.MholderTemp
        }

        axios.post('http://localhost:5000/contacts', data)
             .then(res => {
               console.log(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      }    // end handleSubmit
        
render(){
  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Contact Form
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent className='CardContent'>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography> 
            <form className="this-form" >
              <Grid container spacing={1} className = "top-grid">
                <Grid xs={12} sm={6} item className="this-grid">
                  <TextField placeholder="Enter first name" value = {this.state.FnameTemp} label="First Name" variant="outlined" fullWidth required className = "this-text" onChange={this.getFname} />
                </Grid>
                <Grid xs={12} sm={6} item className="this-grid">
                  <TextField placeholder="Enter last name" value = {this.state.LnameTemp} label="Last Name" variant="outlined" fullWidth required className = "this-text" onChange={this.getLname} />
                </Grid>
                <Grid item xs={12} className="this-grid">
                  <TextField type="email" value = {this.state.EmailTemp} placeholder="Enter email" label="Email" variant="outlined" fullWidth required className = "this-text" onChange={this.getEmail} />
                </Grid>
                <Grid item xs={12} className="this-grid">
                  <TextField  label  = "Message Field" value = {this.state.MholderTemp} multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required className = "this-text" onChange={this.getMholder} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth onClick= {this.handleSubmit}>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
}

export default App;