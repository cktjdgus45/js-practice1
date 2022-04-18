const item1 = { name: 'milk1', price: 3 };
const item2 = { name: 'milk2', price: 4 };
const item3 = { name: 'milk3', price: 5 };

const products = [item1, item2, item3];

let found = products.find(value => value.name = "milk2");
console.log(found)

found = products.some(value => value.name === "milk2");
console.log(found)

found = products.every(value => value.name === "milk2");
console.log(found)

found = products.filter(value => value.price === 2);
console.log(found)

found = products.map(value => value.price * 2);
console.log(found)

let result = [1, 2, 3, 4, 5].reduce((sum, value) => {
    sum += value;
    return sum;
})

console.log(result)