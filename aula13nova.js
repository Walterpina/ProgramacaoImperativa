function Conta(numeroConta, tipoConta, saldo, titular) {
  this.numeroConta = numeroConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

let novaConta = new Conta(123456, 'Conta Corrente', 1000.00, 'Walter Pina');
//console.log(novaConta);

let contasClientes = [
  {
    "conta": 5486273622,
    "tipo": "Conta Corrente",
    "saldo": 27771.00,
    "titular": "Abigail Natte"
  },
  {
    "conta": 1183971869,
    "tipo": "Conta Poupança",
    "saldo": 8675.00,
    "titular": "Ramon Connell"
  },
  {
    "conta": 9582019689,
    "tipo": "Conta Poupança",
    "saldo": 27363.00,
    "titular": "Jarret Lafuente"
  },
  {
    "conta": 1761924656,
    "tipo": "Conta Poupança",
    "saldo": 32415.00,
    "titular": "Ansel Ardley"
  },
  {
    "conta": 7401971607,
    "tipo": "Conta Poupança",
    "saldo": 18789.00,
    "titular": "Jacki Shurmer"
  },
  {
    "conta": 630841470,
    "tipo": "Conta Corrente",
    "saldo": 28776.00,
    "titular": "Jobi Mawtus"
  },
  {
    "conta": 4223508636,
    "tipo": "Conta Corrente",
    "saldo": 2177.00,
    "titular": "Thomasin Latour"
  },
  {
    "conta": 185979521,
    "tipo": "Conta Poupança",
    "saldo": 25994.00,
    "titular": "Lonnie Verheijden"
  },
  {
    "conta": 3151956165,
    "tipo": "Conta Corrente",
    "saldo": 7601.00,
    "titular": "Alonso Wannan"
  },
  {
    "conta": 2138105881,
    "tipo": "Conta Poupança",
    "saldo": 33196.00,
    "titular": "Bendite Huggett"
  }
];

let listaDeContas = [];
//listaDeContas.push(new Conta(listaDeContas[0].conta, listaDeContas[0].tipo, listaDeContas[0].saldo, listaDeContas[0].titular));

//console.log(listaDeContas);

for(let i = 0; i < contasClientes.length; i++) {
  listaDeContas.push(new Conta(contasClientes[i].conta, contasClientes[i].tipo, contasClientes[i].saldo, contasClientes[i].titular));
}
//console.log(listaDeContas);

let Banco = {
  clientes: listaDeContas,
  consultarCliente: function(titular) {
    for(let i = 0; listaDeContas.length; i++) {
      if(listaDeContas[i].titular === titular){
        return listaDeContas[i];
      }
    }
  },
  deposito: function(titular, valor){
    for(let i = 0; i < listaDeContas.length; i++){
      if(listaDeContas[i].titular === titular) {
        listaDeContas[i].saldo += valor;
        return 'Depósito realizado, seu novo saldo é: ' + listaDeContas[i].saldo;
      }
    }
  },
  saque: function(titular, valorSaque) {
    for(let i = 0; i < listaDeContas.length; i++) {
      if(listaDeContas[i].titular === titular) {
        listaDeContas[i].saldo -= valorSaque;
        if(listaDeContas[i].saldo < 0) {
          return 'Fundos insuficientes';
        } else {
          return 'Extração feita com sucesso, seu novo saldo é: '+ listaDeContas[i].saldo;
        }
      }
    }
  }
};

//Cliente
console.log(Banco.consultarCliente("Lonnie Verheijden"));
console.log("------------------------------------------------------------");

//Depósito e Saldo
console.log(Banco.deposito("Lonnie Verheijden", 5000));
console.log("------------------------------------------------------------");

//Saque e saldo.
console.log(Banco.saque("Lonnie Verheijden", 7177));
console.log("------------------------------------------------------------");