let person = {
    firstName: 'Flávia',
    lastName: 'Pereira',
    favoriteMoveis: ['Harry Potter', 'O senhor dos anéis'],
}

// console.log(person)

// console.log(person['firstName'])
// console.log(person.favoriteMoveis[1])

person.firstName = 'Allan';
person.city = 'Sombrio';
person['lastName'] = 'Minato';
person.users = ['users1', 'users2', 'users3'];

person.adress = {
    street: 'Rua santos coelho',
    number: 123,
    other: 'Fundos'
}

console.log(person.adress.street);

