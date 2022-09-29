let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'pink';

let primeiroFilhoDoFilho = document.firstElementChild;
primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho"
    
let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let texto = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;