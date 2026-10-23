//strings and numbers
//strings
let s="welcome";
//charAt()
console.log(s.charAt(2));//letter l
//concat
console.log(s.concat(" home"));//welcome home
console.log(s.concat(" home").concat(" dear"));//welcome home dear
//replace
s="welcome to JS";
console.log(s.replace("JS","JavaScript"));//welcome to JavaScript
//substring
s = "welcome";
console.log(s.substring(0,3));//wel
console.log(s.substring(3,7));//come
//toLowerCase()
s = "WeLcOmE dEAr";
console.log(s.toLowerCase());//welcome dear
//toUpperCase()
s = "WeLcOmE dEAr";
console.log(s.toUpperCase());//WELCOME DEAR
//split()
s = "Welcome to JS"
let arr = (s.split(' '));//[ 'Welcome', 'to', 'JS' ]
for (spl of arr)
{
    console.log(spl); //lists down Welcome, to, JS
}

//trim()
s = " welcome "; //welcome
console.log(s.trim());

//numbers
let x = 102;//integer
let y = 102.7;//decimal
let z = 10e2;//exponential

console.log(x,y,z);

//isInteger()
x = 10;
y = 1.8;
z = "x";

console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//parseInt() //converts string into integer
s = "12345";
console.log(typeof(s));//string
console.log(typeof(Number.parseInt(s)));//number

let i = Number.parseInt(s);
console.log(i);//12345

//parseFloat()//converts string into decimal
s= "123.456";
console.log(typeof(s));//string
console.log(typeof(parseFloat(s)));//number

i=Number.parseFloat(s);
console.log(i);//123.456

//toString();//converts number to string
let n = 1234;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));

n = 12.34;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));