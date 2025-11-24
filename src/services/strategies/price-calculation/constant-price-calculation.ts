import { Ticket } from "../../../models/ticket/ticket";
import { IPriceCalculationStrategy } from "./Iprice-calculation";

export class ConstantPriceCalculationStrategy implements IPriceCalculationStrategy{

    private _ticket: Ticket;
    
    constructor(ticket:Ticket){
        this._ticket = ticket;
    }

    public get ticket(): Ticket {
        return this._ticket;
    }

    public set ticket(value: Ticket) {
        this._ticket = value;
    }

    calculatePrice():number{
        // we need to have constant to maintain this value
        return 100
    }   
}