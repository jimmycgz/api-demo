const express = require('express');
const app = express();
const request = require('request');
const config = require('./config/config.json');
const fs = require('fs');

app.get('/', function(req, response) {
    request(config.api3_gcp_url, { json: true }, (err, res, body) => {
        if (err) {
            response.send('API-AWS-001 is running fine. But I was not able to reach API3-GCP due to ' + err);
        } else {
            response.send('API-AWS-001 is running fine and managed to reach out to API3-GCP. Well done!');
        }
    });
});

app.get('/config', function(req, res) {
    res.json(config);
});

app.get('/health', function(req, res) {
    res.send('Ok');
});

app.get('/config-log', function(req, res) {
    fs.readFile('/var/log/cloud-init-output.log', 'utf8', function (err,data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
      });
});

app.listen(3000, function() {
    console.log('API-AWS-001 is running...');
});
