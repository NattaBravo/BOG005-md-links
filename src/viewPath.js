const fs = require ('fs');
const Path = require ('path');
const process = require ('process');
const argsTerminal = process.argv;


// VALIDAR RUTA 

let readPath = (pathParam) => {
    let newPath;
    let arrayMDs = [];

    if (pathParam == undefined || pathParam === "") {
        console.log("Error, no es posible leer la ruta que insertaste, verifica la documentación e intenta de nuevo.");
    } else if(!Path.isAbsolute(pathParam)) {
        console.log('La ruta adjunta es relativa')
        newPath = Path.resolve(pathParam);
    } else {
        console.log('La ruta adjunta es absoluta')
        newPath = pathParam;
    };

    // Identificación del TIPO DE ELEMENTO que representa la ruta ¿Es un archivo? ¿Un directorio?
    
    if (newPath) {

        // SI LA RUTA ES UN ARCHIVO MD
        if(Path.extname(newPath) == ".md" && fs.statSync(newPath).isFile()){
            console.log("exitos, tienes un archivo Markdown'.md'")
            arrayMDs.push(newPath);
            console.log(arrayMDs);
        }
        // SI LA RUTA ES UNA CARPETA (FUNCIÓN RECURSIVA)
        if (Path.extname(newPath) == ""){
           console.log("Esta ruta dirige a una carpeta y esta carpeta contiene los siguientes elementos: ");
           let readDirect = fs.readdirSync(newPath);
           console.log(readDirect); // Muestra cada elemento contenido en la carpeta
           readDirect.forEach((file) => {
            file = Path.join(newPath, file)

            // Si en los elementos al interior de la carpeta se encuentra un archivo MD
            if (Path.extname(file) == ".md" && fs.statSync(file).isFile()) {
            console.log("Tu carpeta contiene los siguientes archivos Markdown'.md'")
            arrayMDs.push(file);
            console.log(arrayMDs);
            } 
            // Si en los elementos al interior de la carpeta se encuentra una subcarpeta
            else if (fs.statSync(file).isDirectory()){
                console.log("Dentro de esta carpeta tienes una subcarpeta que contiene:")
                arrayMDs = readPath(file).concat(arrayMDs);
            } 
            // Si los elementos no son ni archivos MD ni carpetas
            else if (Path.extname(newPath) != ".md" || Path.extname(newPath) != "") {
                console.log("Adjuntaste un archivo de un formato distinto ")
            }
           })
        }    
    };
    console.log(arrayMDs);
    return arrayMDs;
    
}

const MDfileSet= readPath(argsTerminal[2]);

/*if (MDfileSet){
    console.log("Revisemos el contenido de tus archivos MD")
    MDfileSet.forEach((file) => {
        fs.readFile(file, 'UTF-8', (error, file) => {
            if (error){
                throw error;
            } else {
                console.log(file);
            }
        })})
}*/


module.exports = {
     readPath,
  };
