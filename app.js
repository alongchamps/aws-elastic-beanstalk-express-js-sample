const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Last push for tonight'));

app.get('/weather', (req, res) => res.send('Getting weather for...'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
