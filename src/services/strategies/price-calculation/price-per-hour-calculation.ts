import { PRICE_PER_HOUR } from "../../../constants/ constants";
import { Ticket } from "../../../models/ticket/ticket";
import { convertSecondsToHours, getEpochTime } from "../../../utils/time/timt-utils";
import { IPriceCalculationStrategy } from "./Iprice-calculation";

export class PricePerHourCalculationStrategy implements IPriceCalculationStrategy{
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
        const startHour = this._ticket.startTime
        const endHour = this.ticket.endTime
        if (!endHour){
            console.log("The endtime is not set for the ticket so can't do price per hour calculation")
            return 0
        }
        const no_of_hours = getEpochTime(endHour)- getEpochTime(startHour);
        return convertSecondsToHours(no_of_hours*PRICE_PER_HOUR[this.ticket.vehicle.vehicleType])
    }   
}