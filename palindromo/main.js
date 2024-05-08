"use strict"

let input = prompt('inserisci la parola');

input = input.replaceAll(' ','')
input = input.toLowerCase();

console.log(input);

myPalindromeCheck(input);

function myPalindromeCheck(userWord){
    const splitWord = userWord.split("");
    console.log(splitWord);
    const reverseWord = splitWord.reverse();
    console.log(reverseWord);
    const joinWord = reverseWord.join("");
    console.log(joinWord);

    if(userWord === joinWord){
        console.log('La parola è palindroma');
    }else{
        console.log('La parola non è palindroma');
    }
}

/*

SOLUZIONE 2 FATTA A LEZIONE

console.log(myCheck());

function myCheck(){

    let input = prompt('stringa');
    input = input.toLowerCase();
    input = input.replaceAll(' ','');
    let s = 0;
    let e = input.length - 1;

    while(e >= s){
        if(input[s] === input[e]){
            s++;
            e--;
        }else{
            return false;
        }
    }
    return true;
}*/