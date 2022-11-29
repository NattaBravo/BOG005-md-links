const mockForMDLinksFalse = [
    {
      href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x1/',
      text: 'Technologie name',
      file: 'CarpetadePruebas\\Pruebas\\pruebaMD.md'
    },
    {
      href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x1/',
      text: 'repeated link',
      file: 'CarpetadePruebas\\Archivo3.md'
    },
    {
      href: 'https://www.pixar.com/404',
      text: 'Technologie name',
      file: 'CarpetadePruebas\\Archivo3.md'
    },
    {
      href: 'https://www.game-of-thrones.com/raenyra/-',
      text: 'Technologie name',
      file: 'CarpetadePruebas\\Archivo3.md'
    },
    {
      href: 'https://www.game-of-thr.com/',
      text: 'Library name',
      file: 'CarpetadePruebas\\Archivo3.md'
    }
];

const mockForMDLinksTrue = [
    {
        href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x1/',
        text: 'Technologie name',
        file: 'CarpetadePruebas\\Pruebas\\pruebaMD.md',
        status: 200,
        mensaje: 'ok'
      },
      {
        href: 'https://pelispedia.one/episodio/la-casa-del-dragon-1x1/',
        text: 'repeated link',
        file: 'CarpetadePruebas\\Archivo3.md',
        status: 200,
        mensaje: 'ok'
      },
      {
        href: 'https://www.pixar.com/404',
        text: 'Technologie name',
        file: 'CarpetadePruebas\\Archivo3.md',
        status: 200,
        mensaje: 'ok'
      },
      {
        href: 'https://www.game-of-thrones.com/raenyra/-',
        text: 'Technologie name',
        file: 'CarpetadePruebas\\Archivo3.md',
        status: 404,
        mensaje: 'Fail'
      },
      {
        href: 'https://www.game-of-thr.com/',
        text: 'Library name',
        file: 'CarpetadePruebas\\Archivo3.md',
        status: 404,
        mensaje: 'Fail'
      }
];

module.exports = {
    mockForMDLinksFalse,
    mockForMDLinksTrue,
}