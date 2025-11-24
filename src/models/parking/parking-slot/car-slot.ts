import { VehicleType } from "../../../enums/enums";
import { ParkingFloor } from "../parking-floor";
import { ICarSlot } from "./Icar-slot";
import { ParkingSlot } from "./parking-slot";

export class CarParkingSlot extends ParkingSlot implements ICarSlot{

    constructor(parkingSpotNo: number,parkingFloor: ParkingFloor){
        super(parkingSpotNo,[VehicleType.CAR,VehicleType.BIKE],parkingFloor);
    }

    parkVehicleIntoSpot(): void {
        console.log("Parked the car into the slot")
    }
}