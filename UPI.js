import { Payment } from "./Payment.js";

class UPI extends Payment
{
    getName()
    {
        console.log("This is UPI payment");
    }

    pay()
    {
        console.log("Scan UPI QR code to pay");
    }
}

const upi = new UPI();
upi.getName();
upi.pay();

const payment = new Payment();
payment.pay();