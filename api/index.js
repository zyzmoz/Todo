const api = require('./database');

const express = require('express');

const app = express();


app.get('/', (req, res) => {
  api.findAll().then((data) => {    
    res.send(data);
  });

});

app.get('/add', (req, res) => {
  res.end(api.save({text:"Daniel"}));
});

app.listen(3000, () =>{
  console.log('Server running at localhost:3000');
});
