let idade = 19;
let acesso = ''; // acesso está vazio para atribuirmos o texto sobre cada condição
if(idade < 16) { // se a idade for abaixo de 16 anos
  acesso = 'Acesso negado';
} else if(idade >= 16 && idade < 18) { // se a idade estiver entre 16 e abaixo 18
  acesso = 'Permitido com acompanhante';
} else { // se a idade for acima de 18
  acesso = 'Acesso liberado.';
}

//Exercicios

//Meu primeiro if

var atencao = false;
if(atencao == true) {
  console.log('O valor é true - verdadeiro');
} else {
  console.log('O valor é false - falso');
}