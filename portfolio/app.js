const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = {'title':'B M PAVAN'}
    res.status(200).render('home.pug', params);
})
app.get('/project', (req, res) => {
    const params = {'title':'B M PAVAN'}
    res.status(200).render('project.pug', params);
})
app.get('/contact', (req, res) => {
    const params = {'title':'B M PAVAN'}
    res.status(200).render('contact.pug', params);
})
app.get('/subscribe', (req, res) => {
    const params = {'title':'B M PAVAN'}
    res.status(200).render('subscribe.pug', params);
})

app.listen(port, () => {
    console.log(`The application started successfully on port http://127.0.0.1:${port}`);
});
