export class Car
{
    constructor(price,model)
    {
        this.price = price;
        this.model = model;
    }

    displayCarDetails()
    {
        console.log("The car Model is "+this.model+" and the car price is "+this.price);
    }
}

const car = new Car();
car.displayCarDetails();