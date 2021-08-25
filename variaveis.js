//aqui foi criada a variável
var nomeDeUsuario = "Walter";
console.log(nomeDeUsuario);
//Aqui atribuímos um novo dado a variável criada
nomeDeUsuario = "João";
console.log(nomeDeUsuario);
//Mesmo o nome da variavel igual, criamos um nova variavel dentro de um bloco
if(true) {
  let nomeDeUsuario = "Renato";
  console.log(nomeDeUsuario);
}

const carro = "Civic";
console.log(carro);

// carro = "Fox"; -> Aqui é apontado um erro no javacript: Assignment to constant variable

//Vamos praticar a criação de tipos de variáveis

let nome = "Walter";
let idade = 41;
let usuarioAtivo = true;

console.log(nome);
console.log(idade);
console.log(usuarioAtivo);
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Usuário está ativo no sistema? " + usuarioAtivo);

//Exercicio 3

console.log(2 + 2);

let um = 3;
let dois = 5;

let soma = (um + dois);
console.log(soma);

let tres = 6;
let soma2 = soma + tres;
console.log(soma2);

tres = "1" + 1;
let soma3 = soma + tres;
console.log(soma3);

tres = "olá" + 23;
let soma4 = soma + tres;
console.log(soma4);
