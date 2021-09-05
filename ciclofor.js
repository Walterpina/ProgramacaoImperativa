for(let contador = 0; contador <= 4; contador ++){
  console.log("Olá Mundo!");
}
console.log('----------------------');
for(let contar = 0; contar < 10; contar++){
  if((contar % 2) != 0) {
    console.log(contar);
  }
}
console.log('---------------------');
for(let tabuada = 0; tabuada <= 10; tabuada++){
  //cálculo da tabuada por um número
  console.log("4 x " + tabuada + " = "+ 4*tabuada);
}
console.log('---------------------');
//Cálculo de tabuada passando para todos os números
for(let numero = 0; numero <=10; numero++){
  //condicao para o x percorrer até o valor 10
  console.log('-------Tabuada do '+numero+' ---------');
  for(let x = 0; x <= 10; x++){
    //aqui a condição multiplica variável numero
    console.log(x + ' x '+numero+' = '+ x*numero);
  }
}

/**
 * Exemplos de loop
 */

//a intenção é criar um loop repetindo a palavra oi 5 vezes
for(let i = 0; i <= 4; i++ ) {
  console.log('oi');
}

//aqui faremos o mesmo loop, porém fazendo a contagem de 0 a 4
//para diferenciar um pouco utilizei a letra a aqui
for(let a = 0; a <= 4; a++) {
  console.log(i);
}