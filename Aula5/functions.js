
//função declarada
function darOi() {
  console.log("Olá, tudo bem?");
}

darOi();

//função expressa

let somar = function() {
  console.log(1 + 1);
};
//a forma de chamar esta função é exatamente a mesma
somar();

//passando os parâmetros para a função
// let soma = function(numA, numB) {
//   console.log(numA + numB);
// }
//os numeros dos parametros são passados na mesma sequencia que foram declarados
// soma(1, 3);

//fazendo com que a funçao retorne a execução
let soma = function(numA, numB) {
  return numA + numB;
};
let resultado = soma(10, 20);
console.log(resultado);