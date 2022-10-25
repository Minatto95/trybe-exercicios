const object = (nomeCompleto) => {
    // const nome = nomeCompleto;
    let objeto = {
        nomeCompleto:nomeCompleto,
        Email:`${nomeCompleto}@trybe.com`,
    }
    return objeto;
}


const newEmployees = () => {
    const employees = {
      id1: object('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: object('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: object('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees());