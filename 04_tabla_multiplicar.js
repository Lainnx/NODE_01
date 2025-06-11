/*TABLA DE MULTIPLICAR
eL usuario indicara que numero desea para la tabla: 
node 04_tabla_multiplicar.js 5
con eso generaremos esta salida por el terminal:
Tabla de multiplicar del X <- el numero que ha elegido el usuario
===========================
1 x 5 = 5
...
10 x 5 = 50
*/
const fs = require("node:fs");

const numero = process.argv[2];
const min = process.argv[3];
const max = process.argv[4];


let salida = `Tabla de multiplicar del ${numero}, entre ${min} y ${max}\n`;
salida +="=".repeat(salida.length-1); // -1 porque cuenta el \n como caracter
// salida +="\n";
// fs.writeFileSync("multiplicar.txt", salida, "utf-8");

// for (let i=0;i<10;i++){
//     // console.log(`${i+1} x ${numero} = ${(i+1)*numero}`);
//     // fs.appendFileSync("multiplicar.txt", `${i+1} x ${numero} = ${(i+1)*numero}\n`, "utf-8");
//     if((i+1)>=min && (i+1)<=max){
//         salida += `\n${i+1} x ${numero} = ${(i+1)*numero}`
//     }
// }
for (let i=min;i<=max;i++){
    // console.log(`${i+1} x ${numero} = ${(i+1)*numero}`);
    // fs.appendFileSync("multiplicar.txt", `${i+1} x ${numero} = ${(i+1)*numero}\n`, "utf-8");

    salida += `\n${i} x ${numero} = ${(i)*numero}`
    
}

try{    // instrucciones sincronas mejor dentro de try - catch
    fs.writeFileSync(`Tabla de multiplicar del ${numero}`, salida, "utf-8");    // mejor escribirlo de una vez que ir escribiendo a pocos
}catch(error){
    console.log(error);
}
