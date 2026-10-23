class Animal
{
    constructor(color)
    {
        this.color = color;
    }

    printColor()
    {
        console.log(this.color);
    }
}

class Dog extends Animal
{
    constructor(color,dotColor,food)
    {
        super(color);
        this.dotColor = dotColor;
        this.food = food;
    }

    eating()
    {
        console.log("Eating ",this.food);
    }

    display()
    {
        this.printColor();
        console.log("Dot is ",this.dotColor);
        this.eating();
    }
}
let d = new Dog("Black","white","Bread");
d.display();
