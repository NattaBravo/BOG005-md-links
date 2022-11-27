const { mdLinks } = require("./index.js");
const { statsOptions, statsValidate } = require("./stats.js");
const { readPath } = require("./viewPath");
const route = process.argv[2];
const arg = process.argv

const cliFunction = (route, options) =>{
    if (route){
       // console.log(route)
        if(arg.includes('--validate')){
            (mdLinks(route, options = { validate: true })
            .then((res) => {console.log(res)}))

    } else if(arg.includes('--stats')){
        (mdLinks(route, (options = { validate: true }))
        .then((res) =>{console.table(statsOptions (res))}))

    } else if(arg.includes('--validates--stats') || arg.includes('--stats--validates')){
        (mdLinks(route, (options = { validate: true }))
        .then((res) =>{console.table(statsValidate(res))}))
        
    } else if(arg!='--stats' || arg !='--validate' || arg == undefined){
        (mdLinks(route, options = { validate: false })
        .then((res) => {console.log(res)}))
    }
} else {
        console.log("¡Introduce una ruta para dar inicio a nuestra labor!");
    }
}

cliFunction(route);