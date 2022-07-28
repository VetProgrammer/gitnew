// file dbconfig.js
const config = {
    user: 'Fuoi',
    password: 'Fuoi',
    server: 'MSI',
    database: 'CustomerInfo',
    options: {
      trustServerCertificate: true,
      trustedconnection: false,
      enableArithAbort: true,
      instancename: 'SQLEXPRESS'
    },
    port: 1433
} 

module.exports = config;
