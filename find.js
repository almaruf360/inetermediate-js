const  numbers =[21, 5, 25, 30, 12, 4, 13, 45,54, 56, 65,6,7,89];

const fives = numbers.find(num => num % 5 ===0);
const fivesAll =numbers.filter(n => n % 5 ===0);
// console.log(fivesAll)

const products = [
    {id:1 , name:'laptop', price: 23000},
    {id:2 , name:'Iphone', price: 80000},
    {id:3 , name:'tablet', price: 63000},
    {id:4 , name:'wacth', price: 1200},
];

const cheap = products.find(product => product.price <2000);

