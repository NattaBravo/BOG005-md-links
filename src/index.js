const { validate } = require("uuid");
const { fixArrayObjects } = require("./selectLinks");
const { validateLink } = require("./validateLinks");
const { readPath } = require("./viewPath");


//const routeUser = process.argv[2];

let mdLinks = (path, options = { validate: false}) => {
    return new Promise((resolve, reject) => {
        const validatePath = readPath(path);
        if (options.validate === true) {
            fixArrayObjects(validatePath)
                .then(response => validateLink(response))
                .then(response => resolve (response))
        }
        else {
            fixArrayObjects(validatePath)
                .then(response => resolve (response))
        }
    })
}
//mdLinks(routeUser).then(rest => (rest))

/*.catch(err => console.log("has cometido error", err));*/

module.exports = {
    mdLinks,
}