import { VehicleType } from "../../enums/enums";
import { Vehicle } from "./vehicle";

export class BikeVehicle extends Vehicle{
    constructor(registrationNo:string,vehicleOwner:string,color:string){
        super(registrationNo,vehicleOwner,color,VehicleType.BIKE)
    }

    parkVehicle():void{
        // we can use custom logger class
        console.log("Parking the bike into the available slot")
    }
}