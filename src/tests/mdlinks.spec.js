const { validate } = require('uuid');
const { mdLinks } = require('../index.js');
const { mockForMDLinksFalse, mockForMDLinksTrue } = require('../__mocks__/mockFunctions.js');
 

describe('Pruebas de la función MDLinks', () => {

  it('Procesar archivo sin validación', () => {
    return mdLinks("CarpetadePruebas")
      .then(res => expect(res).toEqual(mockForMDLinksFalse))
  });

  it('Procesar archivo + --validate', () => {
    return mdLinks("CarpetadePruebas", { validate : true})
      .then(res => expect(res).toEqual(mockForMDLinksTrue))

  })
})