//Loop de Pares

function loopDePares(el) {
  for(let cont = 0; cont <= 100; cont++) {
    // console.log(cont);
    if((cont + el) % 2 == 0) {
      console.log("Número " + (cont + el) + " é par");
    }
    if((cont + el) % 2 != 0) {
      console.log(cont + el);
    }
  }
}

//loopDePares(1);

console.log("-------------------------------");

//Loop de Impares

function loopDeImpares(el, word) {
  for(let cont = 0; cont <= 100; cont++) {
    // console.log(cont);
    if((cont + el) % 2 == 0) {
      console.log(cont + el);
    }
    if((cont + el) % 2 != 0) {
      console.log(cont + el + " " + word);
    }
  }
}
//loopDeImpares(1, "Atef");

//Soma

function soma(num) {
  let soma = 0;
  for(let i = 0; i <= num; i++) {
    soma += i;
  }
  return soma;
};

//console.log(soma(3));

//Novo Array

function newArray(num) {
  let newArray = [];
  for(let i = 0; i <= num; i++) {
    newArray.push(i);
  }
  return newArray;
}
//console.log(newArray(10));

//String.split()

function split(el) {
  let arraySplit = [];
  for(let i = 0; i < el.length; i++) {
    arraySplit.push(el[i]);
  }
  return arraySplit;
}
//console.log(split("Certfied Tech Development"));

//Mover os zeros para o final

let arr = [true, 0, 1, 5, 0, 0, 1, 3, 'Maria'];

function moverZeros(el){
  let novoArray = el.sort(function(a, b){
    if(a == 0 && b != 0){
      return 1;
    } else if(b ==0 && a != 0){
      return -1;
    } else {
      return 0;
    }
  })
  return novoArray;
}
//console.log(moverZeros(arr));

//Lidando com dois Arrays

let arr1 = [1, 2, 3, 4];
let arr2 = ['o', 'l', 'á', '!'];

function arrayHandler(element1, element2){
  for(let i = 0; i < element2.length; i++) {
    if(element2[i] && element1[i]) {
      console.log('Eu sou '+ element2[i] + ' e eu sou o índice ' + element1[i]);
    }
  }
}
//arrayHandler(arr1, arr2);

//Arrays de objeto

function arrayObjectOne(num) {
  let arr = [];
  for(let i = 0; i <= num; i++) {
    arr.push({ valor: i});
  }
  return arr;
}
console.log(arrayObjectOne(2));

//Arrays de objetos 2

function arrayObjectTwo(num, word) {
  let arr = [];
  for(let i = 0; i <= num; i++) {
    arr.push({ [word]: i});
  }
  return arr;
}
console.log(arrayObjectTwo(2, "palavra"));

//