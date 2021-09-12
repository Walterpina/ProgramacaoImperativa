let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

function converterAMaiusculas(array) {
  array[0] = array[0].toUpperCase();
  array[1] = array[1].toUpperCase();
  array[2] = array[2].toUpperCase();
  array[3] = array[3].toUpperCase();
  array[4] = array[4].toUpperCase();
  return array;
}
console.log(converterAMaiusculas(peliculas));

let novasPeliculas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function passagemDeElemento(elemento1, elemento2) {
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  return elemento1;
}

console.log(passagemDeElemento(peliculas, novasPeliculas));
  

/**
 * Concurso
 */

let primeiroParticipante = [5, 8, 4, 9, 5];
let segundoParticipante = [8, 7, 8, 6, 8];
let terceiroParticipante = [7, 5, 10, 8, 3];

//melhor média

function melhorMedia(elemento) {
  let soma = 0;
  for(let i = 0; i < elemento.length; i++) {
    soma += elemento[i];
    media = soma / i;
  }
  return media;
}

console.log('Primeiro participante: ' + melhorMedia(primeiroParticipante));
console.log('Segundo Participante: '+ melhorMedia(segundoParticipante));
console.log('Terceiro Participante: '+ melhorMedia(terceiroParticipante));

//maior e-tip

function maiorETip(elemento) {
  let maior = 0;
  for(let i = 0; i < elemento.length; i++){
    if(maior < elemento[i]) {
      maior = elemento[i];
    }
  }
  return maior;
}

console.log('Primeiro Participante: '+ maiorETip(primeiroParticipante));
console.log('Segundo Participante: '+ maiorETip(segundoParticipante));
console.log('Terceiro Participante: '+ maiorETip(terceiroParticipante));

//Criando a função competição

