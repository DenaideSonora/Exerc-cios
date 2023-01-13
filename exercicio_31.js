let nomes = ['Denaide', 'Gigi', 'Apollo', 'Fanio', 'Rosa', 'Maria'];
let idades = [44, 13, 01, 46];

function verificaElementosArray(arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificaElementosArray(nomes);
verificaElementosArray(idades);


