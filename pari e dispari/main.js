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
        console.log(userNumber);
    }else{
        console.log('Inserisci un numero compreso da 1 a 5');
    }

}while(input == false);


