const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use( parser.json() );
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, _ => {
  console.log(`Express started on port ${port}`);
});


app.get('/', (req, res) => {
  res.render('index')
});