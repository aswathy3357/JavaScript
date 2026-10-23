export class Flower
{
    constructor(name,color)
    {
        this.name = name;
        this.color = color;
    }

    flowerDetails()
    {
        console.log("Flower name: "+ this.name + " Flower color: "+ this.color);
    }
}

//const flower = new Flower("Lotus","Pink");
//flower.flowerDetails();