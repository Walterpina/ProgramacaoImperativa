let SexoPessoas = function(sexo, altura) {
  this.sexo = sexo;
  this.altura = altura;
};

let pessoas = [
  {
    "sexo": "M",
    "altura": 1.80,
  },
  {
    "sexo": "F",
    "altura": 1.63,
  },
  {
    "sexo": "M",
    "altura": 1.75,
  },
  {
    "sexo": "M",
    "altura": 1.83,
  },
  {
    "sexo": "F",
    "altura": 1.73,
  },
  {
    "sexo": "F",
    "altura": 1.76,
  },
  {
    "sexo": "M",
    "altura": 1.79,
  },
  {
    "sexo": "F",
    "altura": 1.64,
  },
  {
    "sexo": "M",
    "altura": 1.89,
  },
  {
    "sexo": "F",
    "altura": 1.81,
  },
  {
    "sexo": "M",
    "altura": 1.78,
  },
  {
    "sexo": "M",
    "altura": 1.65,
  },
  {
    "sexo": "M",
    "altura": 1.81,
  },
  {
    "sexo": "M",
    "altura": 1.77,
  },
  {
    "sexo": "M",
    "altura": 1.82,
  },
  {
    "sexo": "F",
    "altura": 1.71
  }
];

let listaPessoas = [];
for(let cont = 0; cont < pessoas.length; cont++) {
  listaPessoas.push(new SexoPessoas(pessoas[cont].sexo, pessoas[cont].altura));
};
//console.log(listaPessoas);

//primeiro ponto - for
//segundo ponto - maior altura e menor altura

let Altura = {
  pessoas: listaPessoas,
  maiorAltura: function(altura){
    let maior = 0;
    for(index in pessoas) {
      if(maior < pessoas[index].altura) {
        maior = pessoas[index].altura;
      }
      return maior;
    }
  },
  menorAltura: function(altura){
    let menor = 0;
    for(i in pessoas) {
      if(menor > pessoas[i].altura) {
        menor = pessoas[i].altura;
      }
    }
    return menor;
  }
};
console.log(Altura.maiorAltura());
console.log(Altura.menorAltura());


