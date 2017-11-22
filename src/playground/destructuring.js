// Object Desctructuring

// const person = {
//   name: 'Daniel',
//   age: 22,
//   location: {
//     city: 'New York',
//     temp: 55
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);


//Array Desctructuring 

const address = ['90 John Street', 'New York', 'New York', '10010'];
const [, city, state = 'New Jersey'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [ itemName, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);