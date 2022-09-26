 function greet(name){
    
    console.log('hey, ' + name + ' tudo bem?');

 }

 greet('Samanta');
 greet('Luis');

function sum(num1, num2){
   return num1 + num2
}

 console.log(sum(10, 5));
 console.log(sum(130, 5));

function biggest(firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        return 'O maior valor é: ' + firstNumber;
    } else if(firstNumber === secondNumber){
    return 'Empate';
    } else {
    
        return 'O maior valor é: ' + secondNumber;
    
    }
}

console.log(biggest(443, 444))



function avarage(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

console.log(avarage(10,20,30));


let firstName = 'Jack';
let lastName = 'Sparrow';

function fullName(firstName, lastName){
    return (firstName + ' ' + lastName)
}

console.log(fullName('Jack', 'Sparrow'))