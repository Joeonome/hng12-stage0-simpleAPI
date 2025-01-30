const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

app.use(cors());

const dateObj = new Date();
const jsonString = dateObj.toISOString();


app.listen(PORT, 
    () => { console.log(`Example app listening on port ${PORT}!`); });

app.get('/', (req, res) => { res.json({ 
  "email": "joseph.onumeguolor@gmail.com",
  "current_datetime": jsonString,
  "github_url": "https://github.com/Joeonome/simpleAPI"}) });


  module.exports = app;