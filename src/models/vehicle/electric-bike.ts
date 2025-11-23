import { VehicleType } from "../../enums/enums";
import { IElectricChargeSupportedVehicle } from "./Ielectric-charge-sup-vehicle";
import { Vehicle } from "./vehicle";

export class ElectricBikeVehicle extends Vehicle implements IElectricChargeSupportedVehicle{
    constructor(registrationNo:string,vehicleOwner:string,color:string){
        super(registrationNo,vehicleOwner,color,VehicleType.ELECTRIC_BIKE)
    }

    parkVehicle():void{
        // we can use custom logger class
        console.log("Parking the electric bike into the available slot")
    }
    chargeVehicle(): void {
        console.log("Chargin the vehicle")
    }

    getBatteryPercentage(): number {
        // We can custom logic to return proper battery percentage every time
        return 90
    }
}