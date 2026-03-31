function mensagemBoasVindas(hora, nome) {
   

    if (hora >= 0 && hora < 12) {
       console.log("Bom dia," + nome + "!!!");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde," + nome  + "!!!");
    } else if (hora >= 18 && hora <= 23) {
        console.log("Boa noite," + nome  + "!!!");
    } else {
        console.log("Hora invalida!!!");
    }

}

mensagemBoasVindas(22, " Maitê");