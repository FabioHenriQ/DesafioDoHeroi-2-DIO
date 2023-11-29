let win = 80; //Vitórias
let defeats = 8; //Derrotas

mainRank(win, defeats);

function mainRank(win, defeats){
    let rankWins = getWinsRank(win, defeats);
    postRank(rankWins);
}

function getWinsRank (wins, defeats){
    return wins - defeats;
}

function postRank(rankWins){
    if(rankWins < 10 && rankWins > 0){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Ferro`);
    }else if(rankWins >= 11 && rankWins < 21){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Bronze`);
    }else if(rankWins >= 21 && rankWins < 51){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Prata`);
    }else if(rankWins >= 51 && rankWins < 81){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Ouro`);
    }else if(rankWins >= 81 && rankWins < 91){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Diamante`);
    }else if(rankWins >= 91 && rankWins < 101){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Lendário`);
    }else if(rankWins >= 101){
        console.log(`O Herói tem saldo de ${rankWins} Vitórias, está no nível de Imortal`);
    }else{
        console.log(`O Herói não tem Rank.`);
    }
}

