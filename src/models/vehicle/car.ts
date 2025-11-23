import { VehicleType } from "../../enums/enums";
import { Vehicle } from "./vehicle";

export class CarVehicle extends Vehicle{
    constructor(registrationNo:string,vehicleOwner:string,color:string){
        super(registrationNo,vehicleOwner,color,VehicleType.CAR)
    }

    parkVehicle():void{
        // we can use custom logger class
        console.log("Parking the car into the available slot")
    }
}