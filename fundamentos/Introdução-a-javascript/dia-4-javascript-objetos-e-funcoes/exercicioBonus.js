function generateArray(character, num){
    let characterArray = [];
    for(let index = 0; index < num; index += 1){
        characterArray.push(character);
    }
return characterArray;
}

console.log(generateArray('*', 10));