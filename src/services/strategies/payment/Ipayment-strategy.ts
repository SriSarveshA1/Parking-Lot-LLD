import { Ticket } from "../../../models/ticket/ticket";

export interface IPaymentStrategy{
    doPayment(ticket:Ticket):void;   
}