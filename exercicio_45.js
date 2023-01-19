const nomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(nomeUsuario.test('denaide-12'));
console.log(nomeUsuario.test('de'));
console.log(nomeUsuario.test('denaide-129u-_tgfd'));
console.log(nomeUsuario.test('denaide'));
console.log(nomeUsuario.test('27-12-1978'));



//console.log(nomeUsuario.test('denaide-12@%j'));