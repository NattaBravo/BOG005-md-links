const fs = require('fs');
const Path = require('path');
const process = require('process');
const argsTerminal = process.argv;


// VALIDAR RUTA 

let readPath = (pathParam) => {
    let newPath;
    let arrayMDs = [];

    if (pathParam == undefined || pathParam === "") {
    } else if (!Path.isAbsolute(pathParam)) {
        newPath = Path.resolve(pathParam);
    } else {
        newPath = pathParam;
    };

    // Identificación del TIPO DE ELEMENTO que representa la ruta ¿Es un archivo? ¿Un directorio?

    if (newPath) {

        // SI LA RUTA ES UN ARCHIVO MD
        if (Path.extname(newPath) == ".md" && fs.statSync(newPath).isFile()) {
            arrayMDs.push(newPath);
        }
        // SI LA RUTA ES UNA CARPETA (FUNCIÓN RECURSIVA)
        if (Path.extname(newPath) == "") {
            let readDirect = fs.readdirSync(newPath);
            readDirect.forEach((file) => {
                file = Path.join(newPath, file)

                // Si en los elementos al interior de la carpeta se encuentra un archivo MD
                if (Path.extname(file) == ".md" && fs.statSync(file).isFile()) {
                    arrayMDs.push(file);
                }
                // Si en los elementos al interior de la carpeta se encuentra una subcarpeta
                else if (fs.statSync(file).isDirectory()) {
                    arrayMDs = readPath(file).concat(arrayMDs);
                }
                // Si los elementos no son ni archivos MD ni carpetas
                else if (Path.extname(newPath) != ".md" || Path.extname(newPath) != "") {

                }
            })
        }
    };
    return arrayMDs;
}

const MDfileSet = readPath(argsTerminal[2]);

module.exports = {
    readPath,
    MDfileSet,
};
