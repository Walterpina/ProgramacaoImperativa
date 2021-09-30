/**
 * 3. Em um arquivo diferente, crie o objeto literal curso que tem como atributos:
 * nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma
 * lista de estudantes (um array composto pelos alunos criados no passo 1).
 * 
 * 4. Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos 
 * nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de
 *  estudantes do objeto curso.
 * 
 * 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne
 *  true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno 
 * tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas 
 * máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
 * 
 * 6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array
 *  de booleanos com os resultados se os alunos aprovaram ou não.
 */

let Aluno = require ('./aluno');

let curso = {
  nomeDoCurso: "Certified Tech Developer",
  notaDeAprovacao: 7,
  faltasMaximas: 2,
  listaDeAlunos: [
    new Aluno("Eduardo", 1, [8, 9, 5, 8]),
    new Aluno("Ederson", 1, [9, 9, 8, 9]),
    new Aluno("Flaviane", 0, [10, 9, 8, 9]),
  ],
  addAluno: function(aluno) {
    return this.listaDeAlunos.push(aluno);
  },
  aprovacao: function(aluno) {
    let porcentagem = this.notaDeAprovacao * 1.1;
    let estudante = this.listaDeAlunos[aluno];
    if((estudante.calcularMedia(aluno) >= this.notaDeAprovacao) && (estudante.faltas < this.faltasMaximas)) {
      return true;
    } else if ((estudante.faltas == this.faltasMaximas) && (estudante.calcular(aluno) >= porcentagem)) {
      return true;
    } else {
      return false;
    }
  },
  aprovacaoAutomatica: function(lista) {
    let listaDeAprovados = [];
    for (let i = 0; i < array.length; i++) {
      listaDeAprovados.push(this.aprovacao(i));
    }
    return listaDeAprovados;
  },
};

console.log(curso);
console.log(curso.addAluno("Karina", 1, [8,9, 10, 9]));
console.log(curso);
console.log(curso.aprovacao(1));