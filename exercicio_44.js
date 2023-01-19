const formatoIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;


console.log(formatoIP.test('876.1.1.1'));
console.log(formatoIP.test('8.8.8.8'));
console.log(formatoIP.test('876.616.1.61'));

console.log(formatoIP.test('dhfjhj'));
console.log(formatoIP.test('87632.932.03.333'));
console.log(formatoIP.test('876.9.0.'));





// const formatoIP = /[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}/;