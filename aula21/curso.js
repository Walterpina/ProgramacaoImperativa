/**
 * Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
 * nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos 
 * alunos criados no passo 1).
 */
 let Estudante = require('./estudosProvas')

let cursos = {
    curso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: [
      new Estudante('Fulano', 1, [9, 8, 9, 8]),
      new Estudante('Ciclano', 0, [9, 8, 9, 10]),
      new Estudante('Beltrano', 1, [3, 8, 4, 5])
    ]
  };

console.log(cursos);