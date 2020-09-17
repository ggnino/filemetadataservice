const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 5000;
const route = require('./route/api.js')

// Express included body parser
app.use(express.json());
// Middleware for file upload
app.use(fileUpload());
// Set static folder
app.use(express.static(__dirname + '/client'));

// Route
app.use('/',route);

app.listen(port, () => console.log(`Server running on port ${port}`))