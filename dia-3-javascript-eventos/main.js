const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('mouseover', handleChangeTech);
secondLi.addEventListener('mouseover', handleChangeTech);
thirdLi.addEventListener('mouseover', handleChangeTech);


input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});


myWebpage.addEventListener('dblclick', function(){
  window.location.replace("https://allan-minato.github.io/")
})

myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = 'pink';
})


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.