const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/rooms', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:number', express.static(path.join(__dirname, '../public')));


app.get('/api/rooms/:number/bookingInfo/', (req, res) => {
  const {number} = req.params;
  res.redirect(`http://127.0.0.1:3002/api/rooms/${number}/bookingInfo/`);
});

app.get('/api/listings/:number/reviews/', (req, res) => {
  const {number} = req.params;
  res.redirect(`http://127.0.0.1:3004/api/listings/${number}/reviews/`);
});
app.get('/api/listings/:number/averagestars/', (req, res) => {
  const {number} = req.params;
  res.redirect(`http://127.0.0.1:3004/api/listings/${number}/averagestars/`);
});


app.get('/api/rooms/:number/general/', (req, res) => {
  const {number} = req.params;
  res.redirect(`http://ec2-18-217-35-168.us-east-2.compute.amazonaws.com/api/rooms/${number}/general/`);
});
app.get('/api/rooms/:number/amenities/', (req, res) => {
  const {number} = req.params;
  res.redirect(`http://ec2-18-217-35-168.us-east-2.compute.amazonaws.com/api/rooms/${number}/amenities/`);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});