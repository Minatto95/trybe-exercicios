const valor1 = 10;
const valor2 = 20;
const valor3 = 30;

if (valor1 > valor2 && valor1 > valor3){
    console.log((valor1) + " é maior que " + (valor2) + " e " + (valor3));
} else if (valor2 > valor1 && valor2 > valor3){
    console.log((valor2) + " é maior que " + (valor3) + " e " + (valor1));
} else {
    console.log((valor3) + " é maior que " + (valor2) + " e " + (valor1));
}