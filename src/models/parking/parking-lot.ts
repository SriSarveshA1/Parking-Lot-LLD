import { ParkingLotService } from "../../services/parking-lot-service";
import { ParkingFloor } from "./parking-floor";

export class ParkingLot{
    // we will have array of parking floors here 
    // and a reference to the parking lot service
    private _parkingFloors: ParkingFloor[];
    private _parkingLotService: ParkingLotService;

    constructor(parkingFloors:ParkingFloor[],parkingLotService:ParkingLotService){
        this._parkingFloors = parkingFloors;
        this._parkingLotService = parkingLotService;
    }

    public get parkingFloors(): ParkingFloor[] {
        return this._parkingFloors;
    }
    public set parkingFloors(value: ParkingFloor[]) {
        this._parkingFloors = value;
    }

    public get parkingLotService(): ParkingLotService {
        return this._parkingLotService;
    }
    public set parkingLotService(value: ParkingLotService) {
        this._parkingLotService = value;
    }
}