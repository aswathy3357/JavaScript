//arithmetic operators +,-,*/,%
let a = 10
let b = 5 
let c = a+b
console.log(c)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//assignment operators =,+=,-=,/=,%=
a+=5 //a=a+5
console.log(a)

a-=5
console.log(a)

a/=5
console.log(a)

a%=5
console.log(a)

//comparison operators ==,===,!=,!==,>,<,<=,>=
let p = 5
let q = "5"

console.log(p==q) //not very strict, just check the values
console.log(p===q) //strict, check type also
console.log(p!=q)//just check the values
console.log(p!==q)//check type also
console.log(10>5)
console.log(10<5)
console.log(10>=10)
console.log(5<=5)

//logical operators &&,||, !
let age =  12
let hasID = true

console.log(age>=18 && hasID)//and
console.log(age>=18 || hasID)//or
console.log(!hasID)//not
console.log(!age)

//Ternary operators: instead of if else, ternary operators can be used
let ter = 12;
const result = (ter>=18)?"Eligible":"Not Eligible";
console.log(result);
