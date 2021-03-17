const EventEmitter = require('events');
const http = require('http');

class Sale extends EventEmitter {
  constructor() {
    super();
  }

  sayHello = () => {
    console.log('hello');
  };
}

const myEmitter = new Sale();
myEmitter.sayHello();

myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Customer Thomas!');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

///////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another request received');
});

server.on('close', (req, res) => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server started');
});
