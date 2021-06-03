function JogandoCartasFora(num){

    let numeroRand;
    let tmp;
    let resultadoCatasFora = [];
    let inicialCartas = [];

    //cria a sequencia de cartas
    for (var j = 1; j < num+1; j++) {
        inicialCartas.push(j);
    }

    //laço para embaralhar a sequencia de cartas
    for (var i = inicialCartas.length; i;) {
        numeroRand = Math.random() * i-- | 0;
        tmp = inicialCartas[numeroRand];
        inicialCartas[numeroRand] = inicialCartas[i];
        inicialCartas[i] = tmp;
    }
  
    //retira as cartas e posiciona a carta da base no topo
    while(inicialCartas.length > 1 ){
        resultadoCatasFora.push(inicialCartas.pop());
        inicialCartas.splice(inicialCartas.length - 1, 0, inicialCartas.pop());
    }
   
    if(num){
      console.log('Discarded cards: '+ String(resultadoCatasFora).replaceAll(",", ", "));
      console.log("Remaining card: " + String(inicialCartas));
    }

}
  
JogandoCartasFora(7)
JogandoCartasFora(19)
JogandoCartasFora(10)
JogandoCartasFora(6)
JogandoCartasFora(0)