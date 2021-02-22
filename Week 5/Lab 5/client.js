// Node.js socket client script
const net = require('net');
// Connect to a server @ port 59000
const client = net.createConnection({ port: 59000 }, () => {
  console.log('Davinder: I connected to the server.');
  client.write('Davinder: Hello this is dverma22!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('Davinder: I disconnected from the server.');
});

// console.log("Hello");