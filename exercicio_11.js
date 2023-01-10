let idade = 17;
let cnh = false;

if(idade >= 18 && cnh == false) {
    console.log("Usuário sem permissão para dirigir, não possui CNH");

}
else if(idade >= 18 && cnh == true) {
    console.log("Usuário com permissão para dirigir");
}
else {
    console.log("Usuário sem permissão para dirigir");
}
    