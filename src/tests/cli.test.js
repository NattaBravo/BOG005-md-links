const { statsOptions, statsValidate } = require("../stats");
const { mockForMDLinksFalse } = require("../__mocks__/mockFunctions");

describe("Stats validate en acción", () => { 
        test.todo('statsOptions retorna la estadística de los links encontrados'), () => {
            expect(statsOptions(mockForMDLinksFalse)).toEqual({ Total: 5, unique: 4 });}
})
