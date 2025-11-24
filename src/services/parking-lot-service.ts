import { ParkingLot } from "../models/parking/parking-lot";
import { ParkingSlot } from "../models/parking/parking-slot/parking-slot";
import { Ticket } from "../models/ticket/ticket";
import { Vehicle } from "../models/vehicle/vehicle";
import { IPriceCalculationStrategy } from "./strategies/price-calculation/Iprice-calculation";
import { ISlotSelection } from "./strategies/slot-selection/Islot-selection";


// we can also have an interface which defines what are the different methods this service class should have
export class ParkingLotService{
    // Here we can have service functions to perform the
        //1 .doParking()
        //2. .leaveFromParkingSlot()

    // This is a core service class which basically has the parkinglot instance and it performs 
    // all the core methods of the parking functionalties of a vehicle

    private readonly _parkingLot: ParkingLot;
    private readonly _vehicleNoToParkingSlotMap: Record<string, ParkingSlot>; // this datastructures help in querying
    private readonly _ticketToParkingSlotMap: Record<string, ParkingSlot>;
   
   
    constructor(parkingLot:ParkingLot){
        this._parkingLot = parkingLot;
        this._vehicleNoToParkingSlotMap = {};
        this._ticketToParkingSlotMap = {};
    }

    public get parkingLot(): ParkingLot {
        return this._parkingLot;
    }

    public get vehicleNoToParkingSlotMap(): Record<string, ParkingSlot> {
        return this._vehicleNoToParkingSlotMap;
    }

     public get ticketToParkingSlotMap(): Record<string, ParkingSlot> {
        return this._ticketToParkingSlotMap;
    }

    doParking(vehicle:Vehicle,slotSelectionStrategy:ISlotSelection,priceCalculationStrategy:IPriceCalculationStrategy): Ticket | null{
        // we will try to park the vehicle if there are any available slots if no then we return null
        const availableSlot = slotSelectionStrategy.returnAvailableSlot(this.parkingLot,vehicle);

        if (!availableSlot){
            return null;
        }

        this.vehicleNoToParkingSlotMap[`${availableSlot.vehicle?.registrationNo}`] = availableSlot;

        // If there are available slot then we try to assign that slot to this vehicle and create the ticket.
        availableSlot.vehicle=vehicle;
        const ticket = new Ticket(new Date(),vehicle,availableSlot,priceCalculationStrategy)
        this.ticketToParkingSlotMap[`${ticket.id}`] = availableSlot;
        return ticket; 
    }

    leaveFromParking(ticket:Ticket){
        //Todo: Need to implement.
    }   
}