class A
{
    a = 100;
display()
{
    console.log(this.a);
}
}

class B extends A
{
    b = 200;
show()
{
    console.log(this.b);
}
}

bObj = new B();
console.log(bObj.a);
console.log(bObj.display());
console.log(bObj.b);
console.log(bObj.show());