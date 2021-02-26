const express = require('express');
const server = express();
const contacts = require('./contacts.json');

server.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

server.listen(5555, () => {
    console.log('Server listening');
})