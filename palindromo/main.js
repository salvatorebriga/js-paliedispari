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