
// const numbers = [12,10,20,30];

// const doubleIt = numbers => numbers*2;
// const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble)

// function getDoubles(numbers) {
    

//     const output = [];

//     for (const number of numbers) {
//         const doubled = doubleIt(numbers);
//         output.push(doubled);
//     }
//     return output;
// }

const fiveTimes = [1,2,3,4,5].map(x=> x*5);


const doubleIt = num => num * 2;
const makeDouble = [10,20,30].map(doubleIt);
console.log(makeDouble)