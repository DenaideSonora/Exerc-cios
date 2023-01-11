function checarTamanhoTexto(texto) {
   if(texto.lenght > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
        }
        console.log(texto.lenght);
    }
    
    checarTamanhoTexto("Teste");
    checarTamanhoTexto("Vamos testar se funciona");