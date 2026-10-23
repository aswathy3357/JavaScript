import { Flower } from "./flower.js";

class Rose extends Flower
{
    constructor(origin,name,color)
    {
        super(name,color);
        this.origin = origin;
    }

    roseDetails()
    {
        console.log("Rose name: "+ this.name +" Color: "+ this.color + " Origin: "+ this.origin ); 
    }
}

const rose = new Rose("UK","Rosey", "Red")
rose.roseDetails();
rose.flowerDetails();

const flower1 = new Flower("orchid","Pink")
flower1.flowerDetails();