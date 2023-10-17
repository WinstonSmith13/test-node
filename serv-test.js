const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8000;


const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');
  let path = './views'
  switch(req.url){
    case '/': 
      path += '/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html';
      res.statusCode = 200;
      break;
    default: 
      path += '/404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
if ( err) {
  console.log(err);
}else {
  res.end(data);
}
  })

});

server.listen(port, hostname, () => {
  console.log(`Le serveur tourne à l'adresse http://${hostname}:${port}/`);
}); 