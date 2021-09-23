console.log(!true);//false
console.log(!false);//true
console.log(!!false);//false
console.log(!!true);//true
console.log(!1);//false
console.log(!!1);//true
console.log(!0);//true
console.log(!!0);//false

let x = 5;
let y = 9;
x < 10 && x !== 5; //false
x > 9 || x === 5; //false
!(x===y); //true

let w = 10;
let z = "a";
console.log(z === "b" || w >= 10);//false || true -> true

let d = 3;
let e = 8;
console.log(!(d == "3" || d === e) && !(e !== 8 && d <= e));//false && true -> false

let str = "";//false
let msg = "haha!";//true
let eBonito = "false";//true
console.log(!((str || msg) && eBonito)); //(false || true) && true -> false (negação)
