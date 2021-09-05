/**
 * A. Acessar elementos específicos de um array.
 * B. Modificar cada um dos elementos de um array e imprimí-los no console.
 * C. Adicionar elementos a um array.
 * D. Extrair elementos de um array.
 * E. Comparar elementos de um array com os elementos de outro.
 */
//'notebook','desktop','switch','storage'

// Ex A
let meuArray = ['mouse', 'teclado','monitor'];
console.log(meuArray[0]);
//mouse
console.log(meuArray[1]);
//teclado
console.log(meuArray[2]);
//monitor

// Ex B
meuArray.splice(0, 1, 'mochila'); //alterei o conteúdo do índice 0
meuArray.splice(1, 1, 'desktop');//alterei o conteúdo do índice 1
meuArray.splice(2, 1, 'notebook');//alterei o conteúdo do índice 2
console.log(meuArray);
//resultado: ['mochila','desktop','notebook']

// Ex C
meuArray.push('mouse', 'teclado', 'monitor');
console.log(meuArray);
//Inclui três novos elementos

// Ex D
meuArray.pop();
meuArray.shift();
console.log(meuArray);

// Ex E
// let outroArray = ['bolsa','mala','caneta'];
// meuArray.toString();
// outroArray.toString();
// console.log(meuArray === outroArray);//false
let meuArray1 = [[1, 2, 3], ['teclado', 'mochila'], [true, false]];
console.log(meuArray1[2][meuArray1[2].length - 1]);
/**
 * O que esses códigos retornam
 */
// 1. 5
// 2. S
// 3. H

let str = 'una string qualquer';
let grupoDeAmigos = [[45,89,0],['Digital','House', true],['string','123','false',54,true,str]]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
console.log(grupoDeAmigos[0].length - 1);
console.log(grupoDeAmigos[0]);
/**
 * Array Invertido
 */
// 1. Criar uma função imprimirInverso que pega um array como argumento e imprime cada elemento em ordem reversa 
 let arrayNumerico = [0, 1, 2, 3, 4];//criei o array
function imprimirInverso(par) {
  //na função eu passo um parametro e imprimo cada posicao
  console.log(par[4]);
  console.log(par[3]);
  console.log(par[2]);
  console.log(par[1]);
  console.log(par[0]);
  console.log([par[4],par[3],par[2],par[1],par[0]]);
}
imprimirInverso(arrayNumerico);

// 2. Criar uma função inverter que recebe array e retorna um novo array invertido

let arrayNumericoInvertido = arrayNumerico.slice(0).reverse();
console.log(arrayNumericoInvertido);

// somarArray()
//aqui vc recebe um array de números e realiza uma soma deles

let somadoArray = [1, 2, 3];
function somaArray(p) {
  let qtd = p.length;
  let soma = 0;
  for(let contador = 0; contador < qtd; contador++ ){
    soma = soma + p[contador];
  }
  return soma;
}
console.log(somaArray(somadoArray));

/**
 * Simulação Array.join()
 * 
 * Neste exercício, você criará uma função chamada "join" que recebe um array e simula o comportamento do método Array.join()
 */

let primeiroArray = ['olá',' ', 'vc', ' ', 'é bão'];

function join(p) {
  let juntar = p[0] + p[1] + p[2] + p[3] + p[4];
  return juntar;
}
console.log(join(primeiroArray));

/**
 * Somar Array
 */

let peliculas = ['start wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
console.log(peliculas[2]);

function filmes(filme) {
  let novoFilme = filme.map(pelicula => pelicula.toUpperCase());
  return novoFilme;
};
console.log(filmes(peliculas));

let novasPeliculas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function novoArray(elemento1, elemento2) {
  let unirArray = elemento1.concat(elemento2);
  return unirArray;
}

function novaArray2(elemento1, elemento2) {
  let novoArray = elemento1;
  for(let i = 0; i < elemento2.length; i++) {
    novoArray.push(elemento2[i]);
  };
  let arrayCorreto = novoArray.pop();
  return novoArray;
}

console.log(novoArray(peliculas, novasPeliculas));
console.log(novaArray2(peliculas, novasPeliculas));

const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareNotas(elemento1, elemento2) {
  if(elemento1.length != elemento2.length) {
    return "Arrays diferentes";
  }
  for(let i = 0; i < elemento2.length; i++){
    if(elemento2[i] === elemento1[i]){
      console.log('nota igual: '+elemento1[i] +' = '+elemento2[i]);
    } else {
      console.log('nota diferente');
    }
  }
}
compareNotas(asiaScore, euroScore);