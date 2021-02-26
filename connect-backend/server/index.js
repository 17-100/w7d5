const express = require('express');
const server = express();
const contacts = require('./contacts.json');

server.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

server.get('/api/contacts/:id', (req, res, next) => {
    const id = req.params.id;
    const contact = contacts.find(contact => contact.id === id);
    res.json(contact);
});


server.listen(5555, () => {
    console.log('Server listening');
})