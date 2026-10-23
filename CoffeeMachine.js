class CoffeeMachine
{
    #boilWater()
    {
        console.log("Water boiling");
    }

    #addPowder()
    {
        console.log("Adding coffee powder");
    }

    #addSugar()
    {
        console.log("Adding sugar");
    }

    makeYourCoffee()
    {
        this.#boilWater();
        this.#addPowder();
        this.#addSugar();
    }

    makeYourWithoutCoffee()
    {
        this.#boilWater();
        this.#addPowder();
    }
}

const myCoffee = new CoffeeMachine();
myCoffee.makeYourCoffee();
myCoffee.makeYourWithoutCoffee();