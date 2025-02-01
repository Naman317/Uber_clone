<<<<<<< HEAD
const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
=======
const http=require("http");
const app=require('./app');

const port =process.env.PORT||3000;

const server=http.createServer(app);
server.listen (port ,()=>{
    console.log("ok");
})
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f
