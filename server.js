const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(7342, () => {
    console.log("server started at http://localhost:7342");
});