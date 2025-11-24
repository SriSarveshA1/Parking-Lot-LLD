import { ParkingSlotStatus, VehicleType } from "../../../enums/enums";
import { Vehicle } from "../../vehicle/vehicle";
import { ParkingFloor } from "../parking-floor";

export abstract class ParkingSlot{
    private _parkingSpotNo: number;
    

    private _parkingSlotStatus: ParkingSlotStatus;
   

    private readonly _allowedVehicleTypes: VehicleType[];
  

    private _vehicle: Vehicle | null; // its optional because when ever there is a vehicle alloted to this
                                        // spot then only it will be occupied. 

    private _parkingFloor: ParkingFloor;

    constructor(parkingSpotNo: number,allowedVehicleTypes: VehicleType[],parkingFloor: ParkingFloor){
        this._parkingSpotNo = parkingSpotNo;
        this._parkingSlotStatus = ParkingSlotStatus.EMPTY;
        this._allowedVehicleTypes = allowedVehicleTypes;
        this._vehicle = null;
        this._parkingFloor = parkingFloor;
        this._parkingFloor.addParkingSlot([this]);
    }
    
    public get parkingSpotNo(): number {
        return this._parkingSpotNo;
    }
    public set parkingSpotNo(value: number) {
        this._parkingSpotNo = value;
    }

    public get parkingSlotStatus(): ParkingSlotStatus {
        return this._parkingSlotStatus;
    }
    public set parkingSlotStatus(value: ParkingSlotStatus) {
        this._parkingSlotStatus = value;
    }

    public get allowedVehicleTypes(): VehicleType[] {
        return this._allowedVehicleTypes;
    }
 
    public get vehicle(): Vehicle | null {  
        return this._vehicle;
    }
    public set vehicle(value: Vehicle | null) {
        // We are setting the vehicle ,
        // And before setting the vehicle we need to have a check if the vehicle is of the allowed vehicle types
        const vehicleType = value?.vehicleType

        if (vehicleType && this.allowedVehicleTypes.includes(vehicleType)){
            this._parkingSlotStatus = ParkingSlotStatus.OCCUPIED;
            this._vehicle = value;
            console.log("Vehicle successfully set")
        }else{
            // we need to use custom error's instead of generic error
            console.log(`Vehicle type not supported , input:[${value}] , supported types:[${this._allowedVehicleTypes}]`)
        }
    }

    public isVehicleAllowed(value:Vehicle){
        const vehicleType = value?.vehicleType

        if (vehicleType && this.allowedVehicleTypes.includes(vehicleType)){
            return true;
        }
        return false;
    }

    public isSlotAvailable():boolean{
        if (this.parkingSlotStatus == ParkingSlotStatus.EMPTY){
            return true
        }
        return false;
    }

    public get parkingFloor(): ParkingFloor {
        return this._parkingFloor;
    }
    public set parkingFloor(value: ParkingFloor) {
        this._parkingFloor = value;
    }

    // We need to have methods like make the vehicle value nullable when some one leaves the slot
    public removeVehicleFromSlot(): void{
        this._parkingSlotStatus = ParkingSlotStatus.EMPTY
        this._vehicle = null;
    } 

    public abstract parkVehicleIntoSpot(): void


    // We will have others methods which will help us in lots of filtering options and all.


}

