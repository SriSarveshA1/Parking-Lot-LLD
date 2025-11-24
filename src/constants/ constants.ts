import { VehicleType } from "../enums/enums";

export const PRICE_PER_HOUR = {
    [VehicleType.BIKE]:10, //we can also have money object which will have value and currency
    [VehicleType.CAR]:20,
    [VehicleType.ELECTRIC_BIKE]:15,
    [VehicleType.ELECTRIC_CAR]:25,
}


export const CONSTANT_PRICE = {
    [VehicleType.BIKE]:10, 
    [VehicleType.CAR]:20,
    [VehicleType.ELECTRIC_BIKE]:15,
    [VehicleType.ELECTRIC_CAR]:25,
}
