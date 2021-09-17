// Setup empty JS object to act as endpoint for all routes
const data = [];
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
// Callback to debug
const port = 3000;
app.listen(port, function () {
    console.log(`Server is running on port: ${port}`)
});

// Initialize all route with a callback function
app.get('/all', getAllData);

// Callback function to complete GET '/all'
function getAllData(req, res) {
    res.send(data);
}

// Post Route
app.post('/entries', function (req, res) {
    const reqData = req.body;
    data.push(reqData);
    res.statusCode = 200;
    res.send(data);
})
