// const express = require('express');
// const path = require('path');
// const app = express();
//
// //############ TEMP
// // require('./API/app');
// //############
//
// app.use(express.static('client/build'));
//
// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
//
// app.listen(process.env.PORT || 9999);

const app = require('./API/app');
const http = require('http');

const port = process.env.PORT || 1234;
const server = http.createServer(app);

server.listen(port);