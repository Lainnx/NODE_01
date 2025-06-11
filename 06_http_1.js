const http = require("node:http");

const server = http.createServer((req, res) => { // request, response
    console.log("Has hecho una peticion desde Node");
});

server.listen(8888, ()=>{
    console.log("Servidor levantado otra vez en http://localhost:8888");
})

// para que el server se actualiza solo y no haya que estar reiniciando el servicio: node --watch 06_http_1.js 