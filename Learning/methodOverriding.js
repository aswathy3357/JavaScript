class Bank
{
    roi()
    {
        return 0;
    }
}

class AXIS extends Bank
{
    roi()
    {
        return 10.5;
    }
}

class SBI extends Bank
{
    roi()
    {
        return 12.5;
    }
}

let sbi = new SBI();
console.log(sbi.roi());

let axis = new AXIS();
console.log(axis.roi());
