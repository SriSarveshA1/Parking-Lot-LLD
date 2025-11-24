import { IPaymentStrategy } from "../../services/strategies/payment/Ipayment-strategy";
import { IPriceCalculationStrategy } from "../../services/strategies/price-calculation/Iprice-calculation";
import { ParkingSlot } from "../parking/parking-slot/parking-slot";
import { Vehicle } from "../vehicle/vehicle";

export class Ticket{
    // we will have reference to the parking slot which got assigned
    // and then to the vehicle which got assigned
    
    private readonly _id: string;
    private readonly _startTime: Date;
    private _endTime: Date | null;
    private _paymentStrategy: IPaymentStrategy | null;
    private readonly _vehicle: Vehicle;
    private _priceCalculationStrategy: IPriceCalculationStrategy; 
    private _parkingSlot: ParkingSlot;
   
    constructor(startTime:Date,vehicle:Vehicle,parkingSlot:ParkingSlot,priceCalculationStrategy:IPriceCalculationStrategy){
        this._id=crypto.randomUUID();
        this._startTime=startTime;
        this._vehicle =vehicle;
        this._endTime = null;
        this._paymentStrategy = null;
        this._priceCalculationStrategy = priceCalculationStrategy;
        this._parkingSlot = parkingSlot;
    }

    public get id(): string {
        return this._id;
    }

    public get startTime(): Date {
        return this._startTime;
    }

    public get parkingSlot(): ParkingSlot {
        return this._parkingSlot;
    }
    public set parkingSlot(value: ParkingSlot) {
        this._parkingSlot = value;
    }

    public get endTime(): Date | null {
        return this._endTime;
    }
    public set endTime(value: Date | null) {
        this._endTime = value;
    }

    public get paymentStrategy(): IPaymentStrategy | null {
        return this._paymentStrategy;
    }
    public set paymentStrategy(value: IPaymentStrategy | null) {
        this._paymentStrategy = value;
    }

    public get vehicle(): Vehicle {
        return this._vehicle;
    }

    public get priceCalculationStrategy(): IPriceCalculationStrategy | null {
        return this._priceCalculationStrategy;
    }
    public set priceCalculationStrategy(value: IPriceCalculationStrategy) {
        this._priceCalculationStrategy = value;
    }

    public calculatePriceForTheParking(): void{
        const calculatedPrice = this.priceCalculationStrategy?.calculatePrice();
        if (calculatedPrice == 0){
            return
        }
        console.log(`Calculated price is = ${calculatedPrice}`)
    }

}