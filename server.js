const express = require('express');
const path = require('path');
const app = express();

//############ TEMP
require('./API/server');
//############

app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 9999);