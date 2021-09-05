//live code string
//para o javascript a string é compreensível como um objeto, logo, ele faz a leitura a partir da posição 0.
//Semelhante a um array.

//Propriedade Length
//o length é uma propriedade do javascript... repare que não possui os parenteses
let texto = "Oi eu sou o Vinicius";
console.log(texto.length);
console.log("Bom dia Pessoas!!!".length);

//Método indexOf
//ele procura o caracter a partir da posição 0
console.log(texto.indexOf('o'));//posição 7 - note que ele faz distinção de maiúscula e Minúscula
console.log(texto.indexOf('O'));//posicao 0
console.log(texto.indexOf('sou'));
//é possível procurar palavras também - resultado 6, ou seja, a partir da posição 6 temos a palavra "sou"

//Método slice
//Para o slice é necessário informar de onde é o ínicio e onde é o fim do que quer pegar
// console.log(stringDefinidaParaLeitura.slice(inicio, fim));
console.log(texto.slice());//O Slice identifica a string toda se passado desta forma
console.log(texto.slice(6,9)); // aqui informei que eu quero... assim: pega para mim o que está da posicao 6 a 9
//Lembre: eu não altero a string, apenas pego a informação para utilização.

//Método trim() é utilizada para retirar espaços antes e depois da string
//note que ele não retira espaços entre
let text = "     Tem espaço antes e depois    ";
console.log(text.trim());//o resultado não possui espaço

//Método split - este tranforma uma string(lembre que ela é um objeto) em um array
console.log(texto.split());//sem colocar o "separador" ela coloca a string inteira como uma posicao do array
//resultado = ['Oi eu sou o Vinicius']
console.log(texto.split(" "))//aqui eu estou determinando que os espaços serão os separadores do array
//resultado = ['Oi','eu','sou','o','Vinicius']

//Método replace
//Ele permite trocar informações dentro do objeto
console.log(texto.replace("Vinicius", "João"));//aqui estou trocando Vinicius por João
//Lembre-se de colocar a palavra como está na string
let textoNovo = texto.replace("Vinicius","João");

console.log(texto.indexOf('V'));//O indexOf faz a leitura do que existe no objeto, caso precise.
//No caso, procurei pela letra V, e ele me retornou o índice 12