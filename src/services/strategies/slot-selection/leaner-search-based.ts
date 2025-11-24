import { ParkingLot } from "../../../models/parking/parking-lot";
import { ParkingSlot } from "../../../models/parking/parking-slot/parking-slot";
import { Vehicle } from "../../../models/vehicle/vehicle";
import { ISlotSelection } from "./Islot-selection";

export class LeanerSearchBased implements ISlotSelection{
    returnAvailableSlot(parkingLot:ParkingLot,vehicle:Vehicle):ParkingSlot|null {
        // we will iterate each and every floors and check which is the first matching slot for the vehicle and return
        // that slot
        for (const parkingFloor of parkingLot.parkingFloors){
            // we are iterating each and every floor
            for(const parkingSlot of parkingFloor.parkingSlots){
                // one by one we check which parkingSlot is availalbe
                if (parkingSlot.isSlotAvailable() && parkingSlot.isVehicleAllowed(vehicle)){
                    console.log(`Parking slot matched ${parkingSlot}`)
                    return parkingSlot;
                }
            }
        }
        console.log("No slot available")
        return null;
    }
} 