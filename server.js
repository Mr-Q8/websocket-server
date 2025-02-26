const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.send('Hello! Message From Server!!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
