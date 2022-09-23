let numerosSorteados = [];

for (let index = 0; index < 6; index += 1){
    numerosSorteados.push(Math.ceil(Math.random() * 60))
}

let meuJogo = [5, 13, 23, 42, 52, 60];
let quantidadeDeAcertos = 0;

for (let percorreNumerosSorteados = 0; percorreNumerosSorteados < numerosSorteados.length; percorreNumerosSorteados += 1){
    for (let percorreMeuJogo = 0; percorreMeuJogo < meuJogo.length; percorreMeuJogo += 1){
        if (numerosSorteados[percorreNumerosSorteados] === meuJogo[percorreMeuJogo]){
            quantidadeDeAcertos++
        }

    }

}

console.log(numerosSorteados);
console.log(meuJogo);
console.log(quantidadeDeAcertos);