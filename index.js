const express = require('express');
const parser = require('body-parser');

const app = express();
const port = 8080;

app.set('view engine', 'hbs')
app.use( parser.json() );
app.use(parser.urlencoded({extended: true}));


app.listen(port, _ => {
  console.log(`Express started on port ${port}`);
});


app.get('/', (req, res) => {
  res.render('index')
});