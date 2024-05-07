"use strict"

/*dichiarazione parametri utente*/
let userChoice = ' ';
let userNumber = 0;

/*variabile di supporto per i check dell'input*/
let input = false;

/*controllo sul pari o dispari*/
do{

    userChoice = prompt('Scegli pari o dispari');

    if(userChoice === 'pari' || userChoice === 'dispari'){
        input = true;
    }

}while(input == false);

console.log('Scelta utente: ' + userChoice);

/*reset della variabile di supporto*/
input = false;


/*controllo sul numero dell'utente*/
do{

    userNumber = Number(prompt('inserisci un numero da 1 a 5'));

    if(isNaN(userNumber)){
        console.log('Perfavore inserisci un numero');
    }else if(userNumber % 1 !== 0){
        console.log('Perfavore inserisci solo valori interi compresi fra 1 e 5');
    }else if(userNumber >= 1 && userNumber <=5){
        input = true;
        console.log('Numero utente: ' + userNumber);
    }else{
        console.log('Inserisci un numero compreso da 1 a 5');
    }

}while(input == false);

myEvenOrOddCheck(userChoice, userNumber);

function myEvenOrOddCheck(functionChoice, functionNumber){
    let computerNumber = Math.floor(Math.random() * (5 - 1) + 1);
    console.log('Numero del computer: ' + computerNumber);

    let result = userNumber + computerNumber;

    if(result % 2 === 0 && userChoice === 'pari'){
        console.log(result + " PARI!!! Vince l'utente")
    }else if(result % 2 === 1 && userChoice === 'dispari'){
        console.log(result + " DISPARI!!! Vince l'utente")
    }else{
        if(result % 2 === 0){
            console.log(result + " PARI!!! Vince il computer");
        }else{
            console.log(result + " DISPARI!!! Vince il computer");
        }
    }
    
}


