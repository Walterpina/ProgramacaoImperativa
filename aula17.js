/**
 * Exercícios de Micro desafio Métodos de Arrays
 */

//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let numeros = [2, 4, 6, 8, 10];
let impares = numeros.map(a => a - 1);
console.log(impares);

//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria
let nomes = ['Maria', 'Pedro', 'Ana', 'Carlota', 'Maria'];
let novosNomes = nomes.filter(pessoa => pessoa.toLowerCase() === 'maria');
console.log(novosNomes);

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
let num = [1, 5, 7, 9, 11];
let outrosNum = num.reduce( (acumulador, numero) => acumulador + '-' + numero);
console.log(outrosNum);

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let animais = ['Leão', 'Vaca', 'Cachorro', 'Gato'];
let descricao = animais.forEach(nome => console.log('O nome do animal é ' + nome) );

/**
 * Micro desafio - Métodos avançados de Array
 */

/**
 * Crie uma função que receba um array composto por números e retorna uma nova
matriz (array) com todos os valores divididos pela soma de toda a matriz, usando
map() e reduce().
 */

let arrayNumeros = [4, 8, 16];

function dividir(elemento) {
  let soma = [];
  soma = elemento.reduce((acc, num) => acc + num);
  let novoArray = elemento.map(function(num) {
    return num / soma
  });
  return novoArray;
}

console.log(dividir(arrayNumeros));

/**
 * Crie uma função que receba um array de palavras e um número, e que retorna uma
matriz (array) com apenas as palavras que têm mais do que uma quantidade de
letras maior do que o número informado. (verifique como funciona o método filter ())
 */

let palavras = ['Ana', 'Carolina', 'Passo Fundo', 'Tocantins', 'dó'];
let numero = 3;

function words(query, num) {
  return palavras.filter( function(query) {
    return query.length > num;
  } );
}
console.log(words(palavras, numero));

/**
 * Crie um array de objetos literais, onde cada objeto será um aluno e terá dois
atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os
alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa.
(Analise qual método seria apropriado para este caso. Recomendamos que você
consulte a documentação do MDN)
 */

let alunos = [
  { nome: "Marcos", nota: 1 },
  { nome: "Everton", nota: 3 },
  { nome: "Alessandra", nota: 6},
  { nome: "Rogelio", nota: 7 }
];

function ordenarNomes(element) {
  //ordenação alfabética
  return element.sort(function(a,b){
    if(a.nome > b.nome) {
      return 1;
    }
    if(a.nome < b.nome) {
      return -1;
    }
  });
}
console.log(ordenarNomes(alunos));

function ordenarNotas(el) {
  return el.sort((a, b) => a.nota - b.nota);
  //ordem crescente de ordenção
}

console.log(ordenarNotas(alunos));