const herois = [
    {vitorias: 70, derrotas: 3},
    {vitorias: 20, derrotas: 15},
    {vitorias: 100, derrotas: 9},
]

for(const heroi of herois){
    let saldo = heroi.vitorias - heroi.derrotas
    let rank = calcularRank(saldo)
    
    console.log("O herói de saldo " + saldo + " está no nível de " + rank)
}

function calcularRank(saldo){
    let rank

    if(saldo < 10){
        rank = "Ferro"
    } else if(saldo >= 11 && saldo <= 20){
        rank = "Bronze"
    } else if(saldo >= 21 && saldo <= 50){
        rank = "Prata"
    } else if(saldo >= 51 && saldo <= 80){
        rank = "Ouro"
    } else if(saldo >= 81 && saldo <= 90){
        rank = "Diamante"
    } else if(saldo >= 91 && saldo <= 100){
        rank = "Lendário"
    } else if(saldo >= 101){
        rank = "Imortal"
    }

    return rank;
}