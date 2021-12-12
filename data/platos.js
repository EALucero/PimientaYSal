const fs = require('fs');
let dbParseado = JSON.parse(fs.readFileSync('./data/comidas.json', 'utf-8'));

module.exports = dbParseado;