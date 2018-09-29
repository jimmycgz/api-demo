const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.status(200).send('API2-AWS is up and running!');
});

app.get('/health', function(req, res) {
    res.send('Ok');
});

app.listen(4000, function() {
    console.log('API2-AWS is running...');
});
