


function tipoDeDados(qualquerCoisa) {
  return typeof(qualquerCoisa);
}

console.log(tipoDeDados(15));
console.log(tipoDeDados("Olá mundo!"));
console.log(tipoDeDados(true));
console.log(tipoDeDados({ nome: "objeto" }));
console.log(tipoDeDados(['aqui', 'temos', 'um', 'array']));