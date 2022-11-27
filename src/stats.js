const statsOptions = (okLinks) => {
    return {
      Total: okLinks.length,
      unique: new Set(okLinks.map((arrayobjects) => arrayobjects.href)).size,
    };
};

const statsValidate = (okLinks) => {
  //let newObject1 = []
    const brokenLinks = okLinks.filter((link) => link.status == 404).length;
    return {
      Total: okLinks.length,
      unique: new Set(okLinks.map((arrayObjetos) => arrayObjetos.href)).size,
      Broken: brokenLinks,
    };
};

module.exports = {
    statsOptions,
    statsValidate,
}