const fs = require('fs')
const marked = require('marked');
const { resolve } = require('path');
const { validate } = require('uuid');
const { readPath, MDfileSet } = require("./viewPath");
const axios = require("axios");

function getLinks(element) {
  const links = [];
  return new Promise((resolve, reject) => {
    fs.readFile(element, 'UTF-8', (error, data) => {
      if (error) resolve(error);
      marked.marked(data, {
        walkTokens: (token) => {
          if (token.type === 'link' && token.href.includes('http')) {
            links.push({
              href: token.href,
              text: token.text.slice(0, 50),
              file: element
            });
          }
        }
      }); resolve(links);
      reject(error)
    });
  });
};

function fixArrayObjects(MDfileSet) {
  let arrayPromises = [];
  return new Promise((resolve, reject) => {
    const allLinks = MDfileSet.map((file) => getLinks(file))
    Promise.all(allLinks).then((res) => {
      resolve(res.flat());
      arrayPromises = (res.flat());
      
    })
  })
};

const arrayObjects = fixArrayObjects(MDfileSet);


module.exports = {
  fixArrayObjects,

}