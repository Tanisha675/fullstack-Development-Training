const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

app.get('/', (request, response) => {
    response.send("working");
});

app.post('/insert-user', (request, response) => {
    console.log(`request received is=${JSON.stringify(request.body)}`);
    response.json({
        message: 'user inserted successfully',
        data: request.body
    });
});
app.post('/insert-person', (request, response) => {
    const personName = request.body.personName; 
    console.log(`request received is=${JSON.stringify(request.body)}`);
    response.send(`person name is ${personName}`);
});
app.post('/insert-person-1', (request, response) => {
    const address = request.body.address; 
    response.json({address});
});

app.listen(port, () => {
    console.log(`server is started at ${port}`);
});
