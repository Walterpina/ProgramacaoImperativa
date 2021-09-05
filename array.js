let meuArray = ['mouse', 'teclado','monitor','notebook','desktop','switch','storage'];
//aqui estou imprimindo o conteudo do array
console.log(meuArray);
//Método push()
//Este método adiciona um ou mais elementos ao array (preencha o parâmetro dentro dos parênteses), no caso, ao array que criei
meuArray.push('mousepad'); //aqui acrescenta um item
console.log(meuArray);
meuArray.push('adesivos','bolsa','mochila','headset');//esta forma acrescenta mais de uma infomação
console.log(meuArray);
//Método pop()
//Este método elimina o último item do array: **este método não recebe parâmetros
meuArray.pop();
console.log(meuArray);//Até aqui ele só retira o item "headset"
meuArray.pop();
meuArray.pop();
console.log(meuArray);//até aqui ele retirou "headset", "mochila" e "bolsa"
//Método shift()
//Este método elimina o primeiro elemento do array: **este é mais um método que não recebe parâmetros
meuArray.shift();
console.log(meuArray);//Aqui o item "mouse" foi excluído como os demais anteriores do final do array
//Método unshift()
//Ao contrário do shift, ele adiciona um item ao início do array
meuArray.unshift('mouse');//aqui acrescentei um novo elemento
console.log(meuArray);
meuArray.unshift('bolsa','mochila','headset');//aqui acrescentei três novos elementos
console.log(meuArray);
//Método join()
//Este método une todos os elementos de um array
let novoMeuArray = meuArray.join();//desta forma escrita, ele separa o conteúdo do array com vírgula
console.log(novoMeuArray);
let novoMeuArray2 = meuArray.join('-');//desta forma separei o conteudo com o hífem '-'
console.log(novoMeuArray2);
//Método lastIndexOf()
//Este método, diferente do indexOf, procura o elemento pelo final do array
console.log(meuArray.lastIndexOf('mousepad'));//aqui ele retorna a posicao onde está a palavra - 10
meuArray.push('headset');//eu acrescentei mais um item headeset para um teste do lastIndexOf
console.log(meuArray);//Aqui eu demonstro onde está este novo headset
//note agora que ao iniciar a varredura pelo fim, ele encontra o item na posição 12, logo ele retorna esta posicao.
//ou seja, ao encontrar em uma das posicoes a palavra que procuro, ele retorna o indice desta, ignorando a outra se houver.
console.log(meuArray.lastIndexOf('headset'));
//Obs: caso não tenha o que procura, ele retorna -1
//Método .includes()
//Aqui ele faz a procura do elemento procurado, e retorna true ou false
console.log(meuArray.includes('mouse'));//true
console.log(meuArray.includes('bolsa')); //true
console.log(meuArray.includes('cabo'));//false
