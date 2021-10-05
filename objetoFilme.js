let filmes = {
  titulo: 'Alice no País das Maravilhas',
  diretor: 'Tim Burton',
  ano: 2018,
  totalVotos: 100,
  nota: 100,
  listaPersonagens: ['Alice', 'Chapeleiro Maluco', 'Coelho Branco'],
  votar: function() {
    return this.totalVotos += 1;
  }
};

function Filmes(titulo, diretor, ano, totalVotos, nota, listaPersonagens) {
  this.titulo = titulo;
  this.diretor = diretor;
  this.ano = ano;
  this.totalVotos = totalVotos;
  this.nota = nota;
  this.listaPersonagens = listaPersonagens;
  this.votar = function() {
    return this.totalVotos += 1;
  }
}

let filmes1 = new Filmes("Harry Potter e a Pedra Filosofal", "Um autor", 2012, 100, 100, ['Harry Potter', 'Ermione', 'Rony']);
let filmes2 = new Filmes("Harry Potter e a Câmara Secreta", "Um autor", 2012, 100, 100, ['Harry Potter', 'Ermione', 'Rony']);
let filmes3 = new Filmes("Harry Potter e a Ordem da Phenix", "Um autor", 2012, 100, 100, ['Harry Potter', 'Ermione', 'Rony']);

let listaFilmes = [filmes1, filmes2, filmes3];

console.log(listaFilmes);

listaFilmes.forEach(function(item) {
  console.log(item.titulo);
})