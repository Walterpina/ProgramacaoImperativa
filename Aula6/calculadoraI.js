
function soma(numero1, numero2) {
  let soma = numero1 + numero2;
  return soma;
}

function subtracao(numero1, numero2) {
  let subtracao = numero1 - numero2;
  return subtracao;
}

function multiplicacao(numero1, numero2) {
  var multiplicacao = numero1 * numero2;
  return multiplicacao;
}

function divisao(numero1, numero2) {
  var divisao = numero1 / numero2;
  return divisao;
}

let somar = soma(10, 5);
let subtrair = subtracao(10, 5);
let multiplicar = multiplicacao(10, 5);
let dividir = divisao(10, 5);
console.log(somar);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);

console.log('------------Teste de Operacoes / Calculadora-----------------');


console.log("Adiciona "+ soma(20, 40));
console.log("Subtracao "+ subtracao(40, 18));
console.log("Divisao "+ divisao(50, 10));
console.log("Multiplicacao "+ multiplicacao(4,4));
console.log("Divisao "+ divisao(0, 10));


console.log('-----------Novo Teste de Operação----------------');

function quadrado(num1) {
  let multiplica = num1 * num1;
  return multiplica;
}
console.log(quadrado(5));

function media(num1, num2, num3) {
  let media = (num1 + num2 + num3) / 3;
  return media;
}
console.log(media(2, 2, 2));

function percentagem(num1, num2) {
  let total = num1;
  let percentagem = ( num2 / 100 ) * total;
  return percentagem;
}
console.log(percentagem(300, 15));

function geradorPercentagem(num1, num2) {
  let gerador = ( num1 / num2 ) * 100;
  return gerador;
}
console.log(geradorPercentagem(2, 200));