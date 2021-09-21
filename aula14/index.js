let arrayModule = require ('./listaArray');
let funcaoSoma = require ('./functionSoma');
let funcaoSub = require ('./functionSub');
let funcaoMulti = require ('./functionMulti');
let funcaoDiv = require ('./functionDiv');
let objetoTeste = require ('./jsonTest');

console.log( arrayModule );
console.log( funcaoSoma(5, 10) );
console.log( funcaoSub(10, 5));
console.log( funcaoMulti(10, 10));
console.log( funcaoDiv(10, 2));
console.log(objetoTeste);