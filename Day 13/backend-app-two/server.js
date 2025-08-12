const express = require('express');
const app = express();
const port = 3006;

app.get('/API1', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/api-2', (req, res) => {
    res.send('Hello from Tanisha!');
});
app.get('/api-3', (req, res) => {
    res.send([{name:'tanisha',class:'b.tech'},{name:'mamta',class:'b.tech'}]);
});
app.get('/homepage-admin', (req, res) => {
    res.send('this is website homepage');
});
app.listen(port, () => {
    console.log(`server is started at ${port}`);
});
