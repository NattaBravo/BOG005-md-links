const { mdLinks } = require('../index.js');


describe('Pruebas de la función MDLinks', () => {

  it('Procesar archivo sin validación', () => {
    return mdLinks("CarpetadePruebas")
      .then(res => expect(res).toEqual([]))
      
    
    console.log('FIX ME!');

});
})

//Instalar JEST