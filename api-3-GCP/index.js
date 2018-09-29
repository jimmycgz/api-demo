const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.status(200).send('API3-GCP is up and running!');
});

app.get('/health', function(req, res) {
    res.send('Ok');
});

app.listen(5000, function() {
    console.log('API3-GCP is running...');
});
