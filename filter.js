const  numbers =[21, 12, 4, 13, 45,54, 56, 65,6,7,89];

const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums)

const tinyNums = numbers.filter(number => number < 20)
// console.log(tinyNums.length)

const even = numbers.filter(n => n % 2 === 0);
// console.log(even)

const odd = numbers.filter(num => num % 2 !==0)
// console.log(odd)

const products = [
    {id:1 , name:'laptop', price: 23000},
    {id:2 , name:'Iphone', price: 80000},
    {id:3 , name:'tablet', price: 63000},
    {id:4 , name:'wacth', price: 1200},
];

const priceMoreThan40k =products.filter(product => product.price > 40000)
console.log(priceMoreThan40k)
