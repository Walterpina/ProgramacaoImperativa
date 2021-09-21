for(var i=0; i<50; i+=10) {
  console.log(i);
}
console.log(i);

// let frutasAmarelas = ['Melão', 'mamão', 'limão'];
// let [fruta1, fruta2, fruta3] = frutasAmarelas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);

let x=5;
let y=x++ + ++x;
console.log('y= '+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*= x+1;
console.log('x= '+x);
console.log('y= '+y);

let valor=5;
let fatorial=1;
for(let i= valor; i > 1; i--) {
  fatorial *= i;
}
console.log('fatorial= '+fatorial);

function soma(a=1,b=3) {
  return a+b;
}
console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));

var z=0;
for(var i=20; i<50; i+=10) {
  z+=i;
}
console.log(z);

let numeros=[10,8,7,99,0,1,6];

console.log(numeros.sort(function(a,b){return b-a;}));

let frutasAmarelas=['melão','mamão','limão siciliano']; //array de frutas amarelas
let frutasVermelhas=['morango', 'cereja', 'maçã red']; //array de frutas vermelhas
let frutasVerdes=['limão', 'kiwi', 'maçã verde']; //array de frutas verdes

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase()); //crio um novo array chamado frutasVermelhas1 com todas as letras maiúsculas
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];//crio um array passando cada array nomeado acima
console.log(todasFrutas);//tenho o resultado do array criado.