const numbers = [10,20,30,40];
const half = numbers.map(n => n/2);
// console.log(half)

const third = numbers.map(n => n/3);
// console.log(third)

const friends = ['Tom Hanks', 'jemmy Verdy', 'Harry Kane', 'leonel Messi'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters)

const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength)


const products = [
    {id:1 , name:'laptop', price: 23000},
    {id:2 , name:'Iphone', price: 80000},
    {id:3 , name:'tablet', price: 63000},
    {id:4 , name:'wacth', price: 1200},
];

const items = products.map(product => product.price);
console.log(items)