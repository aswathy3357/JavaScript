import { Car } from "./carInheritance.js";
class Honda extends Car
{
    constructor(color,price,model)
    {
        super(price,model);
        this.color = color;
    }

    hondaDetails()
    {
        console.log("Honda Model :"+ this.model +" Price : "+ this.price +" Color : "+ this.color);

    }
}

const honda1 = new Honda("red", 3000, "Civic");
honda1.hondaDetails();
honda1.displayCarDetails();

const carObj = new Car(4000,"ABCModel");
carObj.displayCarDetails();