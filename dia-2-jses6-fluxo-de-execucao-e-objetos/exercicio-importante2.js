const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let name = order.name;
  let phoneNumber = order.phoneNumber;
  let street = order.address.street;
  let numberAdress = order.address.number;
  let apartment = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, a entrega para:${name}, Telefone:${phoneNumber}, R.${street}, Nº:${numberAdress}, AP:${apartment}.`)
  
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;
  
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); // Exiba a mensagem desejada utilizando `template literals`
  
  
  };
  
  orderModifier(order);

//   “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.