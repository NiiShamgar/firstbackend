const http = require ('http');

const handleAllRequest= (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/signup') {
        responseObject.write('<h1> Welcome to SignUp Page </h1>');
        responseObject.end();
    } else if (url === '/login') {
        responseObject.write('<h2> Login Right Now </h2>');
        responseObject.end();
    } else if (url === '/contact') {
        responseObject.write('<h2> Contact Us Today </h2>');
        responseObject.end();
    } else if (url === '/gallery') {
        responseObject.write('<h2> Check out our pictures </h2>');
        responseObject.end();
    } else if (url === '/store') {
        responseObject.write('<h2> Get something from our store </h2>');
        responseObject.end();
    }
}

const server = http.createServer(handleAllRequest);

server.listen(3000,'127.0.0.1', ()=> {
    console.log('server running');
});