// Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// let n = 5;
// let imputLine = ""
// let symbol = "*"

// for (let index = 0; index < n; index += 1){
//     imputLine = imputLine + '*'

// }


// for (let index = 0; index < n; index += 1){
//     console.log(imputLine)
//     }
 
// let size = 5
// let line = '*'
// let symbol = '*'

// for(let index = 0; index < size; index += 1){
//     console.log(line)
//     line = line + symbol
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//     for(let index = 1; index < numbers.length; index += 1){
        
//         for(let secondIndex = 0; secondIndex < index; secondIndex += 1){
            
//             if(numbers[index] > numbers[secondIndex]){
                
//                 let position = numbers[index]
                
//                 numbers[index] = numbers[secondIndex]
                
//                 numbers[secondIndex] = position

//             }
//         }
//     }

//     console.log(numbers)

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];

// for(let index = 0; index < array.length; index += 1){
//     if(array[index].length > biggestWord.length){

//         biggestWord = array[index]
//     }
// }
// console.log(biggestWord)

// let word = 'tryber';

// let inverter = '';

// for(let index = 0; index < word.length; index += 1){
//     inverter += word[word.length - 1 - index];

// }

// console.log(word)
// console.log(inverter)

// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números, são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma). 
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)



// 1. Encontre o index através do valor de um elemento
// Escreva um algoritmo que recebe 2 parâmetros:

// Um array contendo um conjunto de números
// O valor de um desses elementos
// Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:

// "Elemento não encontrado no array"


let numeros = [1, 3, 5, 7, 9];
let valor = 3;

for(let index = 0; index < numeros.length; index += 1){

    valor = numeros[index]

}
console.log(numeros)
