/**Checkpoint Programação Imperativa
 * Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus 
 * respectivos tempos pré-definidos. 
 * 
 * 
  1 - Pipoca – 10 segundos (padrão);
  2 - Macarrão – 8 segundos (padrão);
  3 - Carne – 15 segundos (padrão);
  4 - Feijão – 12 segundos (padrão);
  5 - Brigadeiro – 8 segundos (padrão); 

  * O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo
  * informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  * Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
  * Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
  * Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
  * No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"
 */

function pipoca(tempo) {
  if(tempo >= 10 && tempo <= 20) {
    console.log("Prato pronto, bom apetite!!!");
  } else if(tempo >= 20 && tempo < 30) {
    console.log("Sua comida queimou!");
  } else if(tempo > 30) {
    console.log("Kabummm");
  } else {
    console.log("Tempo inexistente");
  }
};

function macarrao(tempo) {
  if(tempo >= 8 && tempo < 16) {
    console.log("Prato pronto, bom apetite!!!");
  } else if(tempo >= 16  && tempo <= 24) {
    console.log("Sua comida queimou!");
  } else if (tempo > 24) {
    console.log("Kabummm");
  } else {
    console.log("Tempo inexistente");
  }
};

function carne(tempo) {
  if(tempo >= 15 && tempo < 30) {
    console.log("Prato pronto, bom apetite!!!");
  } else if(tempo >= 30 && tempo <= 45) {
    console.log("Sua comida queimou!");
  } else if(tempo > 45) {
    console.log("Kabummm");
  } else {
    console.log("Tempo inexistente");
  }
};

function feijao(tempo) {
  if(tempo >= 12 && tempo < 24) {
    console.log("Prato pronto, bom apetite!!!");
  } else if(tempo >= 24 && tempo <= 36) {
    console.log("Sua comida queimou!");
  } else if(tempo > 36) {
    console.log("Kabummm");
  } else {
    console.log("Tempo inexistente");
  }
};

function brigadeiro(tempo) {
  if(tempo >= 8 && tempo < 16) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (tempo >= 16  && tempo <= 24) {
    console.log("Sua comida queimou!");
  } else if (tempo > 24) {
    console.log("Kabummm");
  } else {
    console.log("Tempo inexistente");
  }
};

function ligarMicroondas(menu, tempo) {
  switch(menu) {
    case 1:
      pipoca(tempo);
      break;
    case 2:
      macarrao(tempo);
      break;
    case 3:
      carne(tempo);
      break;
    case 4:
      feijao(tempo);
      break;
    case 5:
      brigadeiro(tempo);
      break;
    default:
      console.log("Prato inexistente!!");
      break;
  }
}

ligarMicroondas(3, 32);

// function pipoca(tempo){

//   let  info_menu = " ";

//   if(tempo<10){
//       info_menu ="**** :O Tempo Insuficiente :o ****";
//   }else if(tempo>=10 && tempo <20){
//       info_menu="****** ♥️ Prato Perfeito ♥️ *****";
//   }else if ( tempo >=20 && tempo<30){
//       info_menu="***** :( Comida Queimou  :( ****" ;
//   }else{
//       info_menu="*******XX Kabuumm =( **********";
//   }
//   return info_menu;
// }

// function macarrao(tempo){

//   let  info_menu = " ";

//   if(tempo<8){
//       info_menu ="**** :O Tempo Insuficiente :o ****";
//   }else if(tempo>=8 && tempo <16){
//       info_menu="****** ♥️ Prato Perfeito ♥️ *****";
//   }else if ( tempo >=16 && tempo<24){
//       info_menu="***** :( Comida Queimou  :( ****" ;
//   }else{
//       info_menu="*******XX Kabuumm =( **********";
//   }
//   return info_menu;
// }