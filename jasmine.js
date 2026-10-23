import { Flower } from "./flower.js";

class Jasmine extends Flower
{
    constructor(ageInDays,name,color)
    {
        super(name,color);
        this.ageInDays = ageInDays;
    }

    jasmineDetails()
    {
        console.log("Jasmine Name: "+this.name+" Color: "+this.color+" Age in days: "+this.ageInDays);
    }
}

const jasmine = new Jasmine(5,"Jazz","White");
jasmine.jasmineDetails();
jasmine.flowerDetails();

const flower1 = new Flower("Lilly","Purple")
flower1.flowerDetails();