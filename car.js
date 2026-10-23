class Car{

    constructor(brand,price)
    {
         console.log("constructor called");
         this.brand = brand;
         this.price = price;
       
    }

    //let brand = "Maruthi";
    detailsDisplay()
    {
    console.log("Car method");
    console.log("Car brand is "+ this.brand);
    console.log("Car price is "+ this.price);
    }
}

const car = new Car("ABC",12000);
const car1 = new Car("BMW",40000);
car.detailsDisplay();
car1.detailsDisplay();