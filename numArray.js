let numbers = [1,2,3,4,5]
/*console.log(numbers)
console.log(numbers.length)
console.log(numbers[3])

//add element to end
numbers.push(6,7)
console.log(numbers)
//remove element from end
numbers.pop();
console.log(numbers)
//add element to start
numbers.unshift(0)
console.log(numbers)
//remove element from start
numbers.shift()
console.log(numbers)

//create subarray
let sliceArray = numbers.slice(3,5)
console.log(sliceArray)
//to delete and update middle members
numbers.splice(5,1)
console.log(numbers)*/

//for of loop
for (let num of numbers){
    console.log(num);
}
console.log("reduce using for of loop");
let sum = 0;
for (let numb of numbers){
    sum = sum+numb;
}
console.log(sum);

console.log("reduce method");
//arrayname.reduce => reduce array into a single value
const reducedNumber = numbers.reduce((total,value)=>total+value,2);
console.log(reducedNumber);

console.log("filter method");
//numbers.filter => filter out values of array based on conditions
const evenArray = numbers.filter((i)=>i%2==0);
console.log(evenArray);

console.log("map method");
//numbers.map => update all elements using a condition
const mapArray = numbers.map((j)=>j*2);
console.log(mapArray);

////Task/////
let mark = [25,48,47,32,33];
//filter odd numbers
let oddArray = mark.filter((i)=>i%2!=0);
console.log(oddArray);

//add 5 to every number
let mapArray1 = oddArray.map((j)=>j+5);
console.log(mapArray1);

//reduce all to single number
let reducedNumber1 = mapArray1.reduce((total,value)=>total+value);
console.log(reducedNumber1);

//do all 3 operations in single line
let mymark = [25,48,47,32,33];
let totalMark = mymark.filter((p)=>p%2!=0).map((q)=>q+5).reduce((total,value)=>total+value);
console.log(totalMark);