"use strict"

let userChoice = ' ';

let input = false;

do{

    userChoice = prompt('Scegli pari o dispari');

    if(userChoice === 'pari' || userChoice === 'dispari'){
        input = true;
    }

}while(input == false);




