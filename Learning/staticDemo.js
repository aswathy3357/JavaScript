class Test
{
    static a = 10;//static variable
    b = 20;

static m1()
{
    console.log("Static method");
}

m2()
{
    console.log("Non static method");
}

}

//We can directly access static variables and methods using class name
console.log(Test.a);//10
//console.log(Test.b);//undefined
Test.a = 1000;
console.log(Test.a);//1000

Test.m1();
//Test.m2();//throws error

//accessing non-static variables and methods through objects
let test = new Test();
console.log(test.b);
console.log(test.m2());