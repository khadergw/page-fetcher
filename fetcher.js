const net = require('net');
const request = require('request');
const fs = require('fs')

const path = process.argv[3]; //'.\index2.html'
//const domain = process.argv[2];

 const conn = net.createConnection({ 
   host: 'example.edu',
   port: 80
 });
 conn.setEncoding('UTF8');

 request('http://www.example.edu', (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});

