function soma(a, b, cb) {
  let p1 = 'Walter';
  return a + b + cb(p1);
}

function texto(p1) {
  return ' esse é o resultado '+ p1;
}

let textosOutros = () => " Esse é outro resultado";

console.log(soma(5, 3, texto));

console.log(soma(5, 3, textosOutros));

function soma2(a, b, cb) {
  let result = a+b;
  return cb( result );
}

function texto2(p1) {
  return ' agora eu quero que vc execute ' +p1;
}

console.log(soma2(8,9, texto));