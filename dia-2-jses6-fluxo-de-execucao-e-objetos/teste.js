const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  
  const listOfSkills = (student) => {
    let list = Object.keys(student);
    for(index in list){
        console.log(`${list[index]}, nivel:${student[list[index]]}`)
    }
  }
console.log('estudante 1');

  listOfSkills(student1)

console.log('estudante 2:');

  listOfSkills(student2)