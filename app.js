const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 80;

// express specific stuff
app.use('/static', express.static('static'))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})
app.get('/get', (req, res) => {
    res.status(200).render('get.pug');
})
app.get('/ow', (req, res) => {
    res.status(200).render('ow.pug');
})



app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});