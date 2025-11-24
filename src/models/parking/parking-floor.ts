import { ParkingSlot } from "./parking-slot/parking-slot";

export class ParkingFloor {
    private _floorNo: number;

    private _parkingSlots: ParkingSlot[];

    constructor(floorNo: number, parkingSlots: ParkingSlot[]){
        this._floorNo = floorNo;
        this._parkingSlots = parkingSlots;
    }

    public get floorNo(): number {
        return this._floorNo;
    }
    public set floorNo(value: number) {
        this._floorNo = value;
    }


    public get parkingSlots(): ParkingSlot[] {
        return this._parkingSlots;
    }
    public set parkingSlots(value: ParkingSlot[]) {
        this._parkingSlots = value;
    }

    // Then we need to have a method for adding the parkingSlot to the array
    addParkingSlot(parkingSlot:ParkingSlot[]){
        this.parkingSlots.push(...parkingSlot)
    }
}