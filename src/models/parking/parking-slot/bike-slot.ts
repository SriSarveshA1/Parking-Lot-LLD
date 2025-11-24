import { VehicleType } from "../../../enums/enums";
import { ParkingFloor } from "../parking-floor";
import { IBikeSlot } from "./Ibike-slot";
import { ParkingSlot } from "./parking-slot";

export class BikeParkingSlot extends ParkingSlot implements IBikeSlot{

    constructor(parkingSpotNo: number,parkingFloor: ParkingFloor){
        super(parkingSpotNo,[VehicleType.BIKE],parkingFloor);
    }

    parkVehicleIntoSpot(): void {
        console.log("Parked the bike into the slot")
    }
}