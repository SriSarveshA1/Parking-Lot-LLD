export function getEpochTime(value:Date):number{
    return Math.floor(value.getTime()/1000)
}

export function convertSecondsToHours(value:number):number{
    return Math.floor(value/3600)
}