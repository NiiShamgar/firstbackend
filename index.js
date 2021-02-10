//const http = require ('http');

const express = require ('express');

const handleAllRequest= (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/signup') {
        responseObject.send('<h1> Welcome to SignUp Page </h1>');
    } else if (url === '/login') {
        responseObject.send('<h2> Login Right Now </h2>');
    } else if (url === '/contact') {
        responseObject.send('<h2> Contact Us Today </h2>');
    } else if (url === '/gallery') {
        responseObject.send('<h2> Check out our pictures </h2>');
    } else if (url === '/store') {
        responseObject.send('<h2> Get something from our store </h2>');
    }
}

//const server = http.createServer(handleAllRequest);
const server = express();

//server.use(handleAllRequest);

const handleGETLogin = (req, res) => {
    res.send('This is login get');
};

const handlePUTLogin = (req, res) => {
    res.send('This is login put');
};
    
const handleDELETELogin = (req, res) => {
    res.send('This is login delete');
};

const handlePOSTLogin = (req, res) => {
        res.send('This is login post');
};



server.get('/login', handleGETLogin);
server.put('/login', handlePUTLogin);
server.delete('/login', handleDELETELogin);
server.post('/login', handlePOSTLogin);



server.listen(3000,'127.0.0.1', ()=> {
    console.log('server running');
});