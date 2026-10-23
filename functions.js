//normal function
function display()
{
    console.log("Good evening");
}
display();

//function with parameter
function add(a,b)
{
    //let a = 10;
    //let b = 12;
    let c = a + b;
    console.log(c);
}
add(10,12);//22
add(5,2);//7
add("10",12);//1012
//function with parameter and return type
function sub(p,q)
{
    let r = p - q;
    return r;
}
console.log(sub(13,10));//3

const L = sub(15,5);
console.log(L);//10

//Anonymous function => function without name
const MULTIPLY = function(c,d)
{
    return c * d;
}
console.log(MULTIPLY(2,5));//10

//Arrow function=no function name,no parameter, no return
//()=>{
//}
const SQUARE = (x)=>{return x*x}
console.log(SQUARE(5));//25