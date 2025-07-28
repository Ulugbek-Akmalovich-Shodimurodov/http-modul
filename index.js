const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Asosiy sahifa');
        res.end();
    }
    if(req.url === '/api/books'){
        res.write(JSON.stringify(['1 book', '2 book', '3 book']));
        res.end();
    }
    // console.log('Yangi bog\'lanish...');
})
server.listen(8000);
console.log(`${server.address().port} portni eshitishni boshladim...`);