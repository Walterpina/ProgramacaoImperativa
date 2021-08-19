let nome1 = "José da Silva";
let idade1 = 27;
let peso1 = 83.5;
let altura1 = 1.70;
let plano1 = "Ouro";

function calcularImc(peso1, altura1) {
  let calcular = peso1 / (altura1 * altura1);
  return calcular.toFixed(2);
}
console.log(calcularImc(peso1, altura1));
let imc = calcularImc(peso1, altura1);

console.log(nome1 + " tem " + idade1 + " anos e seu índice de massa corporal é de "+ imc); 

let nome = "Ana";
let sobrenome = "Paula";
let idade = 26;
let peso = 55;
let altura = 1.62;
let plano = "Prata";

function calcularImc(peso, altura){
    let calcular  = peso/Math.pow(altura, 2);
    return calcular.toFixed(2);
}
console.log(calcularImc(peso,altura));
let IMC = calcularImc(peso,altura);
console.log(nome+" "+sobrenome+" tem "+idade+" anos, e seu indice de massa corporal é de "+IMC);
