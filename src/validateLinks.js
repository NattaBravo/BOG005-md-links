const { fixArrayObjects, getLinks } = require("./selectLinks");
const axios = require("axios");
const { readPath } = require("./viewPath");
const argsTerminal = process.argv;


/*const arrayObjects = [
  {
    href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x6/',
    text: 'https://pelispedia.one/episodio/la-casa-del-dragon',
    file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Pruebas\\pruebaMD.md'
  },
  {
    href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x1/}',
    text: 'https://pelispedia.one/episodio/la-casa-del-dragon',
    file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Archivo3.md'
  },
  {
    href: 'https://www.pixar.com/404',
    text: 'https://www.pixar.com/404',
    file: 'C:\\Users\\Nattalia Bravo\\Documents\\Javascript\\MDLINKS\\BOG005-md-links\\src\\CarpetadePruebas\\Archivo3.md'
  }
]
*/

function validateLink(arrayObjects) {
   let arrPromises = [];
   arrPromises = arrayObjects.map((object) => {
    return axios
        .get(object.href)
        .then((res) => {
          //console.log("Status =", res.status);
            object.status = res.status;
            object.mensaje = "ok";
            return object;
        })
        .catch((err) => {
          object.status = 404;
          object.mensaje = "Fail";
          return object;
        });
    });

    return  Promise.all(arrPromises).then(res=>res); 
};
    
//validateLink(arrayObjects)
//fixArrayObjects(readPath(argsTerminal[2]))
//.then(res=>(res));
  
module.exports = {
  validateLink,
}
