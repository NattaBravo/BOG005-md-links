const { validate } = require("uuid");
const { getLinks } = require("./selectLinks");
const { readPath } = require("./viewPath");

const routeUser = process.argv[2];

let mdLinks = (path, options = {validate:false}) => {
    return new Promise ((resolve, reject) => {
        const validatePath = readPath(path);
        //const //funcion validar
        if (options.validate == true ){
            getLinks(validatePath)
        .then(response=>resolve(response))}
        else {
            reject("eres un perdedor")
            getLinks(validatePath)
        .then(response=>validarHTTP(response))
        .then(answerValidate => resolve(answerValidate))}
    })
        }
mdLinks().then(rest => console.log(rest)).catch(err=>console.log(err))