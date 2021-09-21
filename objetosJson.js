// Exemplo de Json

let contasBancarias = {
  "numero": 123456,
  "tipoDeConta": "Corrente",
  "saldo": 1200.56,
};

// próxima linha -------
// exemplo de objeto literal

let Motocicleta = {
  marca: "Honda",
  cilindradas: 500,
  cor: "azul",
  velocidade: 250,
  acelera: 'pisando',
  acelerando: function(acelera) {
    this.acelera = acelera ? 'pisando' : 'parado';
    if(acelera) {
      console.log('acelerando');
    }
  },
  ano: 2021,
  concessionaria: "Honda Floripa",
};

console.log(Motocicleta.marca);
Motocicleta.acelerando(true);

// objeto literal

let pais = {
  nome: 'Brasil',
  capital: 'Brasília',
  nacionalidade: function() {
    return 'Sou do ' + this.nome;
  }
};

console.log(pais);
console.log(pais.nome);
console.log(pais.capital);
console.log(pais["nome"]);
console.log(pais.nacionalidade());

// construtor de objetos literais

let carro = {
  marca: 'Fiat',
  modelo: 'Uno',
};

function Carro(marca, modelo){
  this.marca = marca;
  this.modelo = modelo;
};

console.log(carro);

console.log(new Carro("Renault", "Sandero"));

let tenista = {
  nome: 'Roger',
  sobrenome: 'Federer',
  idade: 38,
  ativo: true,
  saudacao: function(){
    return "Olá, me chamo " + this.nome + " " + this.sobrenome;
  }
};

console.log(tenista.nome);
console.log(tenista.sobrenome); //execucao do objeto
console.log(tenista.saudacao());//execucao do método do objeto
