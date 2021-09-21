// método map

let array = [2, 4, 8, 12, 18];

let dobro = array.map(function(num) {
  return num * 2;
});

console.log(dobro);

//método filter
let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(function(idade) {
  return idade >= 18;
});

console.log(maiores);

let nomes = ['Ana', 'Carlos', 'Aeviles'];

let outrosNomes = nomes.filter(function(nome){
  return nome == "Carlos";
});

console.log(outrosNomes);

// método reduce

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
});
console.log(soma);

let stringona = ['Aula ', 'hoje ', 'foi ', 'sobre ', 'flexbox.'];
let frase = stringona.reduce(function(acumulador, proxima){
  return acumulador + proxima;
});
console.log(frase);

//método forEach

let paises = ['Brasil', 'Peru', 'Argentina', 'Turquia'];
paises.forEach((pais) => console.log(pais));