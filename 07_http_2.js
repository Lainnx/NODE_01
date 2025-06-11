const http = require("node:http");
// const PUERTO = process.argv[2] || 8888;  // las flags no cuentan como parametro
/*.env sin espacios
PORT=4000
PASSWORD="12345abcde"
*/
// obtener los datos del .env
process.loadEnvFile();
// console.log(process.env);
const PUERTO = process.env.PORT || process.argv[2] || 8888;

const style =`
<style>
h1{
    color:red;
}
</style>
`


const server = http.createServer((req, res) => { // request, response
    // console.log(res.statusCode);    // cada vez que haga un createserver hace esto
    
    if(req.url == "/"){
        // console.log("conectados a la raiz del server");
        res.writeHead(200, {"content-type":"text/html"});
        console.log(res.statusCode);
        res.write(style);
        res.write("<h1>Estamos en / desde Node</h1>");
        res.end();
        return;
    } else if(req.url == "/contacto"){
        // console.log("conectados a /contacto");
        res.writeHead(200, {"content-type":"text/html"});
        res.write(style);
        res.write("<h1>Estamos en /contacto</h1>");
        res.end();
        return;
    }else{
        // console.log("Ruta desconocida");
        res.writeHead(404, {"content-type":"text/html"});
        console.log(res.statusCode);
        res.write("<meta charset='utf-8'>")
        res.write(style);
        res.write("<h1>Error 404</h1>");
        res.write("<a href='/'>Volver a HOME 🏡<a>");
        res.end();
        return;
    }
});

server.listen(PUERTO, ()=>{
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})
