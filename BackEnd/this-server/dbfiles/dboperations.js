// file:  dboperations.js
const config = require('./dbconfig'); // access database configuration
const sql = require('mssql');

const getContacts = async() => {
     try {
        let pool = await sql.connect(config); // Log on to database
        let theseContacts = await pool.request().query(
            "SELECT * FROM Contacts"
        );
        return theseContacts;
     }  // end try block
     catch(error) {
         console.log("DATABASE CONNECTION ERROR IN     getThisContact  Error Posted Next Line");
         console.log(error);
     } // end catch
}  // end getContacts

const getThisContact = async(contactId) => {
    try {
       let pool = await sql.connect(config); // Log on to database
       let theseContacts = await pool.request()
           .input('input_parameter', sql.Int, contactId)
           .query( "SELECT * FROM Contacts where contactId =  @input_parameter");
           return theseContacts;
    }  // end try block
    catch(error) {
        console.log("DATABASE Query ERROR IN     getThisContact  Error Posted Next Line");
        console.log(error);
    } // end catch
}  // end getThisContact


const addContact = async(contact) => {
    try {
       let pool = await sql.connect(config); // Log on to database
       let addedContact = await pool.request()
           .input('firstName', sql.VarChar,contact.firstName)
           .input('lastName', sql.VarChar, contact.lastName)
           .input('emailAddr', sql.VarChar, contact.emailAddr)
           .input('street', sql.VarChar, contact.street)
           .input('city', sql.VarChar, contact.city)
           .input('stateProvince', sql.VarChar, contact.stateProvince)
           .input('countryCode', sql.VarChar, contact.countryCode)
           .input('postalCode', sql.Int, contact.postalCode )
           .input('homephone', sql.VarChar, contact.homephone ) 
           .input('workphone', sql.VarChar, contact.workphone ) 
           .input('cellphone', sql.VarChar, contact.cellphone )
           .input('messageHolder', sql.VarChar, contact.messageHolder )  
            .execute('InsertOrUpdateContact');
        return addedContact.recordsets;

    }  // end try block
    catch(error) {
        console.log("DATABASE Post ERROR IN     addContact  Error Posted Next Line");
        console.log(error);
    } // end catch
}  // end addContact



module.exports = { getContacts, getThisContact, addContact}
