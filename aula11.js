let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

function converterAMaiusculas(array) {
  array[0] = array[0].toUpperCase();
  array[1] = array[1].toUpperCase();
  array[2] = array[2].toUpperCase();
  array[3] = array[3].toUpperCase();
  array[4] = array[4].toUpperCase();
  return array;
}
// console.log(converterAMaiusculas(peliculas));

let novasPeliculas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function passagemDeElemento(elemento1, elemento2) {
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  elemento1.push(elemento2.pop().toUpperCase());
  return elemento1;
}

// console.log(passagemDeElemento(peliculas, novasPeliculas));
  

/**
 * Concurso
 */

let primeiroParticipante = [5, 8, 4, 9, 5];
let segundoParticipante = [8, 7, 8, 6, 8];
let terceiroParticipante = [7, 5, 10, 8, 3];

//melhor média

function soma(elemento) {
  let somando = 0;
  for(let i= 0; i < elemento.length; i++) {
    somando += elemento[i];
  }
  return somando;
}

function melhorMedia(elemento) {
  let soma = 0;
  for(let i = 0; i < elemento.length; i++) {
    soma += elemento[i];
    media = soma / i;
  }
  return media;
}

// console.log('Primeiro participante: ' + melhorMedia(primeiroParticipante));
// console.log('Segundo Participante: '+ melhorMedia(segundoParticipante));
// console.log('Terceiro Participante: '+ melhorMedia(terceiroParticipante));

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

// console.log('Primeiro Participante: '+ maiorETip(primeiroParticipante));
// console.log('Segundo Participante: '+ maiorETip(segundoParticipante));
// console.log('Terceiro Participante: '+ maiorETip(terceiroParticipante));

//Criando a função competição

function competicao(elemento1, elemento2, elemento3) {
  
  let mediaPrimeiro = melhorMedia(elemento1);
  let mediaSegundo = melhorMedia(elemento2);
  let mediaTerceiro = melhorMedia(elemento3);
  console.log("As notas do Participante A totalizam " + soma(elemento1) + "e sua média é "+mediaPrimeiro);
  console.log("As notas do Participante B totalizam " + soma(elemento2) + "e sua média é "+mediaSegundo);
  console.log("As notas do Participante C totalizam " + soma(elemento3) + "e sua média é "+mediaTerceiro);

  if(mediaPrimeiro > mediaSegundo && mediaPrimeiro > mediaTerceiro) {
    console.log('A maior média é do participante A com '+ mediaPrimeiro);
  }
  if(mediaSegundo > mediaPrimeiro && mediaSegundo > mediaTerceiro) {
    console.log('A maior média é do participante B com '+ mediaSegundo);
  }
  if(mediaTerceiro > mediaPrimeiro && mediaTerceiro > mediaSegundo) {
    console.log('A maior média é do participante C com '+ mediaTerceiro);
  }
  
  let eTipPrimeiro = maiorETip(elemento1);
  let eTipSegundo = maiorETip(elemento2);
  let eTipTerceiro = maiorETip(elemento3);

  if(eTipPrimeiro > eTipSegundo && eTipPrimeiro > eTipTerceiro) {
    console.log('A maior pontuação é do participante A com '+ eTipPrimeiro);
  }
  if(eTipSegundo > eTipPrimeiro && eTipSegundo > eTipTerceiro) {
    console.log('A maior pontuação é do participante B com '+ eTipSegundo);
  }
  if(eTipTerceiro > eTipPrimeiro && eTipTerceiro > eTipSegundo) {
    console.log('A maior pontuação é do participamnte C com '+ eTipTerceiro);
  }
}

competicao(primeiroParticipante, segundoParticipante, terceiroParticipante);