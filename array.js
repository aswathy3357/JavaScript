let fruits = ["mango","apple","avocado","Grapes"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits[2])
fruits.push("Banana","Pineapple")//add new member to end of array
console.log(fruits)
fruits.pop()//remove last member of the array
console.log(fruits)
fruits.unshift("Kiwi")//add new member to start of array
console.log(fruits)
fruits.shift()//remove first member of the array
console.log(fruits)
let sliceArray = fruits.slice(1,5) //to create subarray from 1 to 4
console.log(sliceArray)
fruits.splice(2,0,"guava")//to update and delete middle members
console.log(fruits)
fruits.splice(3,2,"strawberry")
console.log(fruits)

//display array using for loop
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}