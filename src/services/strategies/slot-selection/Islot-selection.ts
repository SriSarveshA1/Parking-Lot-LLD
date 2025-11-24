import { ParkingLot } from "../../../models/parking/parking-lot";
import { ParkingSlot } from "../../../models/parking/parking-slot/parking-slot";
import { Vehicle } from "../../../models/vehicle/vehicle";

export interface ISlotSelection{
    returnAvailableSlot(parkingLot:ParkingLot,vehicle:Vehicle):ParkingSlot |null;   
}