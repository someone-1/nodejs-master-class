const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const port = process.env.port || 8080;

const server = http.createServer((req, res)=>{

    // true makes the .query property return an object
    // setting it to false returns the string
    const requestUrl = url.parse(req.url, true);

    // path to the request
    const requestPath = requestUrl.pathname;

    //query parameters
    const requestQuery = requestUrl.query;

    // request method
    const requestMethod = req.method.toLocaleLowerCase();

    // request headers
    const requestHeader = req.headers;


    // parsing payload 
    let buffer = '';

    // created a decoder that decodes utf-8 to string
    const decoder = new StringDecoder('utf-8')

    req.on('data', (data)=>{
        buffer += decoder.write(data);
    });

    req.on('end', ()=>{
        buffer += decoder.end();
        console.log('requestPath ', requestPath, '\nrequestQuery ', requestQuery)
        console.log('buffer ', buffer)
        res.write('hello world');
        res.end()
    })
    
})




server.listen(port, ()=>{
    console.log('server started and listening on port ', port)
});