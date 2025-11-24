import { VehicleType } from "../../../enums/enums";
import { ParkingFloor } from "../parking-floor";
import { ICarSlot } from "./Icar-slot";
import { ParkingSlot } from "./parking-slot";

export class ElectricCarParkingSlot extends ParkingSlot implements ICarSlot{

    constructor(parkingSpotNo: number,parkingFloor: ParkingFloor){
        super(parkingSpotNo,[VehicleType.ELECTRIC_CAR,VehicleType.ELECTRIC_BIKE],parkingFloor);
    }

    parkVehicleIntoSpot(): void {
        console.log("Parked the electric car into the slot")
    }
}