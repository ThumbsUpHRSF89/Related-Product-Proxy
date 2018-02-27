const express = require('express');
const path = require('path');

const app = express();
// const request = require('request');
const bodyParser = require('body-parser');


const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/product/:id', async (req, res) => {
  const id = req.params;
  let data = await dataController.findProduct(id);
  res.status(201);
  res.send(data);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
