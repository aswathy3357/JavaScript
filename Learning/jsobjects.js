let person = 
{
    fname : "John",
    lname : "Doe",
    age : 30,
    weight : 70
};
console.log(person.fname);
//add new property
person.height =5.5;
console.log(person.height);
//update existing property
person.weight = 55;
console.log(person.weight);
//remove property from object
delete person.age;
console.log(person.age);//undefined

//for in loop
for (let x in person)
{
    //console.log(x);//print property names
    //console.log(person[x]);//print property values
    console.log(x+" "+person[x]);//print both property names and values
}