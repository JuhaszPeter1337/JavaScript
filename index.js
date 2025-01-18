const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

const loop = numbers.map((num, index) => `Index ${index}: ${num}`);

const plus_1 = numbers.map((num, index) => `Index ${index}: ${num + 1}`);

console.log(doubled);
console.log(loop);
console.log(plus_1);
