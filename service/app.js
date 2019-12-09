const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const transactions = require('./routes/transactions.route');

const port = 5000

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', transactions);

app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})