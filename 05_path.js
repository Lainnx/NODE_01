const path = require("node:path");

console.log(path.sep);  // el separador entre carpetas que estamos usando, \ en windows

// path tiene join, para construir ruta basada en nombres de carpeta

const rutainventada = path.join("project","public","css","styles.css");
console.log(rutainventada);

//obtener el nombre y extension del fichero
console.log(path.basename(rutainventada));

//obtener la ruta de las carpetas
console.log(path.dirname(rutainventada));

