export interface IElectricChargeSupportedVehicle{
    // we will have functions that the electric charge supported vehicle will have
    chargeVehicle(): void;
    getBatteryPercentage(): number;
}