
const finalID =  /\d+ID\b/; //o \b no final garante que a string termine com ID

console.log(finalID.test("76245ID"));
console.log(finalID.test("76245"));
console.log(finalID.test("ID76245"));
console.log(finalID.test("ID"));
console.log(finalID.test("fsfsdfID"));