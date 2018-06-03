const express = require('express');
const app = express();

app.use(express.static('client/build'));
app.listen(process.env.PORT || 9999);