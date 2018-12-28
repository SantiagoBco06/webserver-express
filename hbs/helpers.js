var hbs = require('hbs');

hbs.registerHelper('getAnio', () => new Date().getFullYear() )
hbs.registerHelper('getAuthor', () => 'Santiago Blanco Juan' )
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });
    return palabras.join(' ');
} )
