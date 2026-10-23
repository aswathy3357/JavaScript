import testData from "./jsonobj.json" with {"type" : "json"}

//converting json data to javascript object
const testObj = JSON.stringify(testData);
const obj = JSON.parse(testObj);
console.log(obj.id);

const person = {
    fName : "John",
    lName : "Doe",
    age : 30,
    isEmployed : true
}
//print person
console.log(person);
console.log(person.fName);//dot notation
console.log(person["lName"]);//bracket notation

//Add new property
person.city = "Kochi";
console.log(person);
console.log(person.city);

//update property
person.lName = "Matt";
console.log(person.lName);

//for in loop to print object
for (const key in person)
{
    console.log(key);
}

//to get values of the object
for (const key in person)
{
    console.log(key+" : "+person[key]);
}
//create a new object
const Student = 
{
 name: "Aswathy",
 id: 1020,
 age: 35,
 course: "Automation",
 subjects:["Playwright","Javascript", "Typescript"],//adding an array in object
 getDetails:function(){
    return `${this.name} is learning ${this.course}`;
 },
 getMyDetails:function()
 {
    return this.name+" is self learning "+this.course;
 }
}
//print object key(property name) and value using loop
for (const key in Student)
{
   if (typeof Student[key] == "function"){
        console.log(Student[key]());
   }
   else
    {   
        console.log(key+" : "+Student[key]);
    }
}
