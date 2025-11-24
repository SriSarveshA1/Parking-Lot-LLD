import { Ticket } from "../../../models/ticket/ticket";
import { IPaymentStrategy } from "./Ipayment-strategy";

export class UpiPaymentStrategy implements IPaymentStrategy{
    doPayment(ticket:Ticket):void{
        // Logic for upi payment will be here
    }
}