const mod1 = require('./modulo1');

// destructor
const {imprimirMensagem} = require('./modulo2');

mod1('meu primeiro módulo Node.js');
imprimirMensagem('meu segundo módulo Node.js');

let t2 = '0';
let t3 = 0;

console.log(t3 == t2);
console.log(t3 === t2);
t2 += 1;
t3 += 1;
console.log(t2);
console.log(t3);