const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
// app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/product/:id/', express.static(path.join(__dirname, '../public')));

// app.get('/product/:id/', (req, res) => {
//   const idNum = req.params.id;
//   res.render('index', { id: idNum });
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

