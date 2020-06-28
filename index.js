const express = require('express');
const app = express();
app.use(express.static('static'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {name: 'World'});
});

app.listen(4000, () => console.log('Example app listening on port 8000!'));