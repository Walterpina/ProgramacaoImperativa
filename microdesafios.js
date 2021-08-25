/**
 * 
 * 
 */


function podeSubir(altura, acompanhada) {
  if((altura >= 1.40) && (altura <= 2.00)) {
    return true;
  } else if((altura < 1.40) && (acompanhada)) {
    return true;
  } else if(altura < 1.20) {
    return false;
  }
  return false;
}
console.log(podeSubir(2.10, false));

function podeSubir2(altura, acompanhada) {
  if((altura >= 1.40) && (altura <= 2.00)) {
    return ('Acesso autorizado');
  } else if((altura < 1.40) && (acompanhada)) {
    return ('Acesso autorizado somente com acompanhante');
  } else if(altura < 1.20) {
    return ("Acesso negado");
  }
  return false;
}
console.log(podeSubir2(2.10, false));