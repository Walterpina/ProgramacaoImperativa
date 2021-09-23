//conversao de polegadas em centimetros
function calculoPolegadas(pol) {
  return pol / 0.39370;
}
console.log(calculoPolegadas(30));

//recebe informacao e retorna url
function stringURL(informacao) {
  console.log("http://www."+informacao+".com.br");
}
stringURL('funcaojs');

//recebe string e retorna ela com o ponto de exclamação
function frase(info) {
  console.log(info + "!");
}
frase('Olá mundo');

//calcula a idade do cachorro, considerando 1 para 7
function idadeCao(idade) {
  console.log(idade * 7);
}
idadeCao(3);

//calculo da hora de trabalho com parametro o salario mensal
function calculoValorHora(salario) {
  return salario / 220;
}
console.log(calculoValorHora(3000));

//função do calculo do IMC recebendo os parametros do calculo
function calculoIMC(altura, peso) {
  return peso / (altura * altura);
}
console.log(calculoIMC(1.75, 89));
console.log(calculoIMC(1.85, 89));
console.log(calculoIMC(1.62, 89));
console.log(calculoIMC(1.73, 95));

//funcao que recebe minuscula e transforma em maiuscula
function transforma(minuscula) {
  return minuscula.toUpperCase();
}
console.log(transforma('transforme esta frase que preciso testar'));

//receb parametro e retorna tipo de dado
function tipoDeDado(qualquer) {
  console.log(typeof(qualquer));
}
tipoDeDado(15);
tipoDeDado('uma string');
tipoDeDado({nome: 'um objeto'});

//calculo do raio com a função math
function calculoCircunferencia(raio) {
  return 2 * Math.PI * raio;
}
console.log(calculoCircunferencia(15));

//