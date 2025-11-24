import { Ticket } from "../../../models/ticket/ticket";
import { IPaymentStrategy } from "./Ipayment-strategy";

export class CashPaymentStrategy implements IPaymentStrategy{
    doPayment(ticket:Ticket):void{
        // Logic for cash payment will be here
    }
}