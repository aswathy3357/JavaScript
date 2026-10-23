import { Payment } from "./Payment.js";

class COD extends Payment
{
    getName()
    {
        console.log("This is COD payment");
    }

    pay()
    {
        console.log("COD - Hand over cash to delivery agent");
    }
}

const cod = new COD();
cod.getName();
cod.pay();

const payment = new Payment();
payment.pay();