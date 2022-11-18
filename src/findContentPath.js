const fs = require ('fs');

//Leer directorio //

//let root ="C:\Users\Nattalia Bravo\Pictures\DCIM"

function readDirectory(path){
    fs.readdir("C:\\Users\\Nattalia Bravo\\Documents\\Grabaciones de sonido", (error, files) => {
        if (error){
            throw error;
        }
        
        console.log(files);
       // fs.readFile('./function.txt', 'UTF-8', (error, file) => {
       //     console.log(file)
       // });
       // console.log('esperando contenido');
    })
};
module.exports = {
    readDirectory,
}
readDirectory()