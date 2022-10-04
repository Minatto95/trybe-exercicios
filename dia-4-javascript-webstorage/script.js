window.onload = function(){
  
  let select = document.getElementById("select");
  select.addEventListener('change', function(){
    let selected = select.selectedOptions[0]
   document.body.style.backgroundColor = selected.value
   localStorage.setItem('backgroundColor', selected.value);
  })
  
  let fontsize = document.getElementById("fontSize");
  fontsize.addEventListener('change', function(){
  let paragrafo = document.getElementById("texto");
  paragrafo.style.fontSize = `${fontsize.value}px`;
  
  localStorage.setItem('fonteSizeStorage', `${fontsize.value}px`)

 
  })

  let selectTexto = document.getElementById("texto");






  let savedBackground = localStorage.getItem('backgroundColor')
  document.body.style.backgroundColor = savedBackground;

  let saveFontesize = localStorage.getItem("fonteSizeStorage");
  let paragrafo = document.getElementById("texto");
  paragrafo.style.fontSize = saveFontesize;
  
}


