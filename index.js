const http = require('http');
const server = http.createServer();
server.on('connection', (socket)=>{
    console.log('Yangi bog\'lanish...');
})
server.listen(8000);
console.log(`${server.address().port} portni eshitishni boshladim...`);