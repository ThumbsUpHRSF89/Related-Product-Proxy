const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const path = require('path');
const app = express();
const request = require('request');
const port = process.env.PORT || 8000;


app.use(morgan('dev'));
// app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/product/:id/', express.static(path.join(__dirname, '../public')));
app.use('/:id/', express.static(path.join(__dirname, '../public')));

app.get('/api/productComparison', (req, res) => {
  request('http://product-comparison:8003/product/:id/bundle.js', (err, response, body) => {
    if (err) {
      console.log('Microservice request error: ', err);
      res.send(err);
    } else {
      res.send(body);
    }
  });
});

app.get('/api/productDtail', (req, res) => {
  request('http://product-detail:8004/bundle.js', (err, response, body) => {
    if (err) {
      console.log('Microservice request error: ', err);
      res.send(err);
    } else {
      res.send(body);
    }
  });
});
app.get('/api/productReview', (req, res) => {
  request('http://reviews:8002/product/:id/bundle.js', (err, response, body) => {
    if (err) {
      console.log('Microservice request error: ', err);
      res.send(err);
    } else {
      res.send(body);
    }
  });
});
app.get('/api/relatedProduct', (req, res) => {
  request('http://related-product:8001/bundle.js', (err, response, body) => {
    if (err) {
      console.log('Microservice request error: ', err);
      res.send(err);
    } else {
      res.send(body);
    }
  });
});
// app.get('/product/:id/', (req, res) => {
//   const idNum = req.params.id;
//   res.render('index', { id: idNum });
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

