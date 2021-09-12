let contasBancarias = {
  "numero": 123456,
  "tipoDeConta": "Corrente",
  "saldo": 1200.56,
};

// próxima linha -------

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

Motocicleta.acelerando(false);