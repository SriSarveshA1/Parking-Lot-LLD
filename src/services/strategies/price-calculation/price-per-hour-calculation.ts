import { Ticket } from "../../../models/ticket/ticket";
import { getEpochTime } from "../../../utils/time/timt-utils";
import { IPriceCalculationStrategy } from "./Iprice-calculation";

export class PricePerHourCalculationStrategy implements IPriceCalculationStrategy{
    private _ticket: Ticket;
    private _pricePerHour: number;
    public get pricePerHour(): number {
        return this._pricePerHour;
    }
    public set pricePerHour(value: number) {
        this._pricePerHour = value;
    }
        
    constructor(ticket:Ticket,pricePerHour:number){
        this._ticket = ticket;
        this._pricePerHour = pricePerHour;
    }
    
    public get ticket(): Ticket {
        return this._ticket;
    }
    
    public set ticket(value: Ticket) {
        this._ticket = value;
    }
    
    calculatePrice():number{
        // we need to have constant to maintain this value
        const startHour = this._ticket.startTime
        const endHour = this.ticket.endTime
        if (!endHour){
            console.log("The endtime is not set for the ticket so can't do price per hour calculation")
            return 0
        }
        const no_of_hours = getEpochTime(endHour)- getEpochTime(startHour);
        return no_of_hours*this.pricePerHour
    }   
}