let fruits = ["Banana","Orange","Apple","Mango"];
//console.log(fruits);
console.log(fruits.toString());
//console.log(fruits.join("*"));

//pop
fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.pop());
console.log(fruits);

//push
fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.push("Kiwi"));
console.log(fruits);

//shift
fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.shift());
console.log(fruits);

//unshift
fruits = ["Orange","Apple","Mango"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//delete
fruits = ["Banana","Orange","Apple","Mango"];
delete fruits[1];
console.log(fruits);

//concat =>joining of 2 or more arrays
let arr1=[10,20];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));
let arr3 = ["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice
fruits = ["Banana","Orange","Lemon","Apple","Mango"];
console.log(fruits.slice(2));//[ 'Lemon', 'Apple', 'Mango' ]

//sort
fruits = ["Banana","Orange","Lemon","Apple","Mango"];
console.log(fruits.sort());
let numbers = [800,300,100,320];
console.log(numbers.sort());

//reverse
fruits = ["Banana","Orange","Lemon","Apple","Mango"];
console.log(fruits.reverse());

//sort advanced
numbers = [800,30,1,320];
console.log(numbers.sort());