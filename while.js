/**
 * Praticando com WHILE
 * Estrutura WHILE
 * o loop é executado até que a condição não seja mais verdadeira.
 */

let volta = 1;
while(volta <= 5) {
  //aqui estou dizendo, faça a contagem dos números a partir do 1 (declarado fora)
  console.log('Volta número ' + volta);
  //aqui estou dizendo que após a primeira demonstração do número, que ele acrescente 1
  volta++;
}

/**
 * Estrutura DO WHILE
 * ao contrário do while, esta estrutura executará pelo menos uma vez a condicional
 */

let voltando = 1;
do {
  console.log('Volta '+voltando);
  voltando++;
} while(voltando <= 5);

//MICRO DESAFIOS

// 1. mostrar números ímpares de 1 a 100
console.log('-------- Contagem de números ímpares -----------');
for(let i = 0; i <= 100; i++){
  if(i % 2 != 0) {
    console.log(i);
  }
}

//a mesma função do for, só que com o while
while(numero <= 100) {
  if(numero % 2 != 0) {
    console.log(numero);
  }
  numero++;
}
// 2. mostrar números pares de 1 a 100
console.log('-------- Contagem de números pares -----------');
for(let i = 0; i <= 100; i++) {
  if(i % 2 == 0){
    console.log(i);
  }
}
// 3. mostrar números pares e ímpares a partir de um número
console.log('-------- Números pares e ímpares -----------');
function mostrarNumeros(p) {
  let recebeNumero = p;
  for(let i = 0; i < recebeNumero; i++) {
    if(i % 2 == 0) {
      console.log("Número par: "+i);
    }
    if(i % 2 != 0){
      console.log("Número ímpar: "+i);
    }
  }
}

mostrarNumeros(10);

// 4. cálculo da média das notas de uma turma



function somarNotas(alunos) {
  let qtdAlunos = 0;
  while(qtdAlunos <= alunos) {
    console.log("Digite a nota do aluno.");
    qtdAlunos++;
  }
}
somarNotas(2);