const http = require('http');
const url = require('url');

const port = process.env.port || 8080;

const server = http.createServer((req, res)=>{

    // true makes the .query property return an object
    // setting it to false returns the string
    const requestUrl = url.parse(req.url, true);

    // path to the request
    const requestPath = requestUrl.pathname;

    //query parameters
    const requestQuery = requestUrl.query;

    
    console.log('requestPath ', requestPath, '\nrequestQuery ', requestQuery)
    res.write('hello world');
    res.end()
})




server.listen(port, ()=>{
    console.log('server started and listening on port ', port)
});