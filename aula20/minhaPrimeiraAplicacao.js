/**
 * MINHA PRIMEIRA APLICAÇÃO
 * 
 * Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
    a maior e a menor altura do grupo;
    a média de altura das mulheres;
    o número de homens.
 */
let pessoas = require ('./pessoas.js');

let lista = pessoas;

let calcular = {
  lista: lista,
  medidas: function (calculando) {
    lista.sort(function(a, b) {
      return a.altura - b.altura;
    })
    let alturaMulheres = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
    for(let i=0; i < lista.length; i++) {
      if(lista[i].sexo === "F") {
        qtdMulheres += 1;
        alturaMulheres += lista[i].altura;
      } else {
        qtdHomens += 1;
      }
    }
    let mediaAltura = (alturaMulheres / qtdMulheres).toFixed(2);
    switch (calculando) {
      case 'menorAltura':
        console.log(`A menor altura registrada é ${lista[0].altura}`);
        break;
      case 'maiorAltura':
        console.log(`A maior altura registrada é ${lista[15].altura}`);
        break;
      case 'media':
        console.log(`A média da altura das mulheres é ${mediaAltura}`);
        break;
      case 'homens':
        console.log(`A quantidade de homens é ${qtdHomens}`);
        break;
    }
  },
};

module.exports = calcular;




// function calcular() {//nesta funçção eu não coloquei um elemento pq tudo está dentro dela
//   // //do array "pessoas" aos cálculos que deverão ser realizados mais abaixo
//   let lista = pessoas;

//   //"Calcula" o menor e maior números dos dados
//   // pessoas.sort(function(a, b) { //esta função está colocando em ordem os valores do menor para o maior
//   //   return a.lista[i].altura - b.lista[i].altura;// a ordem é crescente como está determinado aqui em a - b, ou seja,
//   // }); //o primeiro número(índice) "menos" o segundo número(índice)

//   //Média de altura das mulheres
//   //aqui foram criadas as variáveis que serão necessárias para a aplciação
//   let alturaMulheres = 0;
//   let qtdMulheres = 0;
//   let qtdHomens = 0;

//   //aqui está o loop com o array pessoas que fará a contagem das informações que precisamos
//   for(let i = 0; i < lista.length; i++) {
//     if(lista[i].sexo === "F") {
//       qtdMulheres += 1;//aqui é feita a contagem da quantidade das mulheres
//       //console.log(qtdMulheres);
//       alturaMulheres += lista[i].altura;//aqui é feita a contagem da altura das mulheres
//       //console.log(alturaMulheres);
//     } else {
//       qtdHomens += 1; //aqui é feita a contagem da quantidade dos homens
//     }
//   }

//   let mediaMulheres = (alturaMulheres / qtdMulheres).toFixed(2); //aqui é calculada a média da altura das mulheres

//   console.log('A menor altura registrada é: ' + lista[0].altura); //aqui eu seleciono o menor valor (pegando do índice 0)
//   console.log('A maior altura registrada é: ' + lista[15].altura); //aqui eu seleciono o maior valor (pegando do índice 15)
//   console.log('A média da altura das mulheres é de: ' + mediaMulheres);
//   console.log('A quantidade de homens é ' + qtdHomens);
// }

// calcular(); //aqui é pedido para que a funçaõ seja executada.

// console.log('------------------------------------------------------')
// /**
//  * Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a 
//  * sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
//     Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
//       a média das idades das pessoas que responderam ótimo;
//       a quantidade de pessoas que responderam regular;
//       a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
//  */

// //criado o objeto fora da função.
// let cinefalos = [
//   {idade: 18, opiniao: 2},
//   {idade: 30, opiniao: 3},
//   {idade: 15, opiniao: 3},
//   {idade: 43, opiniao: 1},
//   {idade: 19, opiniao: 2},
//   {idade: 20, opiniao: 2},
//   {idade: 32, opiniao: 3},
//   {idade: 17, opiniao: 3},
//   {idade: 27, opiniao: 1},
//   {idade: 28, opiniao: 3},
//   {idade: 38, opiniao: 1},
//   {idade: 39, opiniao: 1},
//   {idade: 40, opiniao: 3},
//   {idade: 39, opiniao: 3},
//   {idade: 19, opiniao: 1},
// ];

// function calcularOpiniao(arr) { //o elemento que a função irá fazer a leitura eu chamei de "arr"
//   //console.log(arr)
//   let somaIdadeOtimo = 0;
//   let quantidadeOtimo = 0;
//   let quantidadeBom = 0;
//   let quantidadeRegular = 0;
//   //aqui é criado o loop que fará a leitura do array cinefalos
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].opiniao == 3) {//aqui eu defino a pesquisa pela nota 3 e calculo
//       somaIdadeOtimo += arr[i].idade; //soma das idades deste voto
//       quantidadeOtimo += 1; //soma de quantidade votaram 3
//     } else if(arr[i].opiniao == 2) {
//       quantidadeBom += 1; //soma de quantidade da nota 2
//     } else {
//       quantidadeRegular += 1;//soma da quantidade de nota 1
//     }
//   }
  // console.log(somaIdadeOtimo);
  // console.log(quantidadeRegular);

  // let mediaIdade = (somaIdadeOtimo / quantidadeOtimo).toFixed(2);//calculo da média da idade do voto de ótimo
  // let percentagem = ((quantidadeBom / arr.length) * 100).toFixed(2); //calculo do percentual

  // console.log('A média das idade que responderam ótimo é ' + mediaIdade);
  // console.log('A percentagem de peessoas que responderam bom entre todos os espectadores é ' + percentagem + '%.');
//}
// calcularOpiniao(cinefalos);//aqui é executada a função com o elemento "cinefalos" 
