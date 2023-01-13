let calculadora = { 
    soma: function(a,b) {
        return a + b;
    },
    subtracao: function(a,b) {
        return a - b;
    },
   multiplicacao: function(a,b) {
        return a * b;
    },
    divisao: function(a,b) {
        return a / b;
    }
}

console.log(calculadora.soma(2,8));
console.log(calculadora.subtracao(10,8));
console.log(calculadora.multiplicacao(5,8));
console.log(calculadora.divisao(100,8));

