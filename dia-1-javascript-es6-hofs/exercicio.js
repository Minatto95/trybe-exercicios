// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!';

const coffee = () => 'Bora tomar café!';

const sleep = () => 'Partiu dormir!';


const doingThings = (callback) => {
   const frase = callback();
   console.log(frase);
}



doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!