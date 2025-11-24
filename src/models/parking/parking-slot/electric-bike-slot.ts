import { VehicleType } from "../../../enums/enums";
import { ParkingFloor } from "../parking-floor";
import { IElectricVehicleSpot } from "./Ielectric-slot";
import { ParkingSlot } from "./parking-slot";

export class ElectricBikeParkingSlot extends ParkingSlot implements IElectricVehicleSpot{

    constructor(parkingSpotNo: number,parkingFloor: ParkingFloor){
        super(parkingSpotNo,[VehicleType.ELECTRIC_BIKE],parkingFloor);
    }

    chargeVehicle(): void {
        console.log("Charging the vehicle")
    }

    parkVehicleIntoSpot(): void{
        console.log("Parked the electric bike into the slot")
    }
}