let cars = ["Saab","Volvo","BMW"];
console.log(cars);
console.log(cars[2]);
cars[0] = "Opel";
console.log(cars);

let myArray = [100,"welcome",10.15, true];//storing different datatypes in an array
console.log(myArray);

//storing objects in Array
let person1 =
{
    name:"John",
    age: 30
};
let person2 =
{
    name:"David",
    age: 40
};
let myarray1 = [person1,person2];
console.log(myarray1);
console.log(myarray1[0]);

let fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.length);

//for of loop
for (let fruit of fruits)
{
    console.log(fruit);
}
//for loop
for (let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//recognize an array
console.log(typeof(fruits));//object
console.log(Array.isArray(fruits));