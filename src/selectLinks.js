const fs = require('fs')
const marked = require('marked')
//const { resolve } = require('path')

let MDfileSet = [
  'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Pruebas\\pruebaMD.md',
  'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Archivo3.md'
];

function getLinks(MDfileSet){
  return new Promise ((resolve, reject) => {
    const links = [];
    MDfileSet.map((file) => {
      fs.readFile(file, 'UTF-8', (error, data) => {
        if (error){
            throw error;
        } else {
          console.log(data);
            marked.marked(data, {
              walkTokens: (token) => {
                if(token.type === 'link' && token.href.includes('http')){
                  links.push({
                    href: token.href,
                    text: token.text,
                    file: file
                }),
                console.log("terminado el primero?")
                }}}); //console.log(links)
              }
            }); 
    }); resolve(links)
  })
}; 
getLinks(MDfileSet);



 /*

function validarLink(arrayObjetos) {
  let arrPromesas = [];
  arrPromesas = arrayObjetos.map((objeto) => {
    return axios
      .get(objeto.href)
      .then((res) => {
        console.log("AXIOSSSSSSS", res.status);
          objeto.status = res.status;
          objeto.mensaje = "ok";
          return objeto;

      })
      .catch((err) => {
        objeto.status = 404;
        objeto.mensaje = "Fail";
        return objeto;
      });
  });

  return  Promise.all(arrPromesas).then(res=>res)
  }
//  validarLink(Links).then(res=>console.log(res))

 leerTodosArchivos(buscarRutasMds(rutAbsolut(ruta)))
 .then(resAll=>validarLink(resAll))
 .then(res=>console.log('soy yo: ', res))

*/

/*module.exports ={
  getLinks,
}*/