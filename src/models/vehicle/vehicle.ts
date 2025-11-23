import { VehicleType } from "../../enums/enums";

export abstract class Vehicle{
    // We will define some common properties which will be applied to all type of vehicle
    // we need to have getters and setters for all of the properties

    private _registrationNo: string;
    public get registrationNo(): string {
        return this._registrationNo;
    }
    public set registrationNo(value: string) {
        this._registrationNo = value;
    }

    private _vehicleOwner: string;
    public get vehicleOwner(): string {
        return this._vehicleOwner;
    }
    public set vehicleOwner(value: string) {
        this._vehicleOwner = value;
    }

    private _color: string;
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    private _vehicleType: VehicleType;
    public get vehicleType(): VehicleType {
        return this._vehicleType;
    }
    public set vehicleType(value: VehicleType) {
        this._vehicleType = value;
    }

    constructor(registrationNo:string,vehicleOwner:string,color:string,vehicleType:VehicleType){
        this._registrationNo = registrationNo;
        this._vehicleOwner = vehicleOwner;
        this._color =color;
        this._vehicleType=vehicleType;
    }

    abstract parkVehicle():void

}

