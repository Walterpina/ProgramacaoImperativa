let pessoa = {
  nome: "Vinicius",
  idade: 21,
  altura: 1.80
};

let json = JSON.stringify(pessoa);
console.log(json);

let objetoDeNovo = JSON.parse(json);

let listaDeCompra = ['pão', 'presunto', 'queijo'];
let json2 = JSON.stringify(listaDeCompra);
let arrayDeNovo = JSON.parse(json2);

console.log(arrayDeNovo);