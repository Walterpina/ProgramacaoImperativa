//If ternário
let dia = 'sábado';
let result = dia === 'domingo' ? 'Vou a praia' : 'Fico em casa';
//console.log(result);

let maior = 4 < 10 ? 'verdadeiro' : 'falso';
console.log(maior);


console.log('----------------------------------------------');
//Switch
switch(dia) {
  case 'segunda':
    console.log('Tomar café');
    break;
  case 'quarta':
    console.log('Vou ao cinema');
    break;
  case 'domingo':
    console.log('Vou a praia');
    break;
  default:
    console.log('Sem agenda alguma');
}

let fruta = 'abacate';
switch(fruta) {
  case 'abacaxi':
    console.log('Não quero esta fruta');
    break;
  case 'laranja':
    console.log('Moço, minha mãe pediu abacate!');
    break;
  default:
    console.log('Desculpe menina, eu não mais o abacate');
}

/**
 * Material Extra
 */

//Imaginemos que queremos mostrar se alguém é ou não maior de idade

let idade = 18;
if(idade < 18) {
  console.log('Menor de idade');
} else {
  console.log('Maior de idade');
}

let pedidoEmprestimo = true;
let rendaMensal = 2500.00;
if(pedidoEmprestimo == true && rendaMensal >= 2500) {
  console.log("Empréstimo liberado");
} else {
  console.log("Empréstimo negado");
}