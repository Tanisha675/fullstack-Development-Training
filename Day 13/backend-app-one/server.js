// import express module
const express = require('express')
// intialize app with express function
const app = express()
// define port
const port = 3003

/*
API section
*/

app.get('/', (req, res) => {
    res.send('Hello from Express!');
    res.send('hello !')
});
// start server
app.listen(port, () => {
    console.log(`server is started at ${port}`)
})