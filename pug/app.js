var express = require('express');
var app = express();

/*
app.set('view engine' , 'pug')
app.get('/' , (req, res) => {
    res.render('base')
})
app.listen(80, () => {
    console.log('open localhost http://127.0.0.1:80')
})
*/

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res) {

    // render the 'index' template, and pass in a few variables
    res.render('home.pug', { title: 'ENGLISH GRAMMER', message: 'Hello there!' });

});

// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
