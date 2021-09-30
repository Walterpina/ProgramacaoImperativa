/**
 * 1. Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number)
 *  e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.
 */

let aluno = [
  {
    nome: 'Ederson',
    faltas: 1,
    notas: [9, 8, 9, 8]
  }
];

/**
 * 2. Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
 * Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
 */

function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  this.calcularMedia = function() {
    let media = (this.notas[0] + this.notas[1], this.notas[2] + this.notas[3]) / 4;
    return media;
  };
  this.ausencia = function() {
    this.faltas++;
  };
  this.addAluno = function(nome, faltas, notas) {
    return Aluno;
  };
  this.aprovacao = function(aluno) {
    return Aluno;
  }
}

// let listaAluno = [];
// listaAluno.push(new Aluno(aluno[0].nome, aluno[0].faltas, aluno[0].notas));
// console.log(listaAluno);

module.exports = Aluno;