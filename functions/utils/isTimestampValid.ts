/**
 * Checks if last remembered timestamp is still valid 
 * @param previousTimestamp Remembered timestamp acquired from Date.now() 
 * @param allowedPassedTime String representing max allowed time. 
 * Allowed time units: s - second, m - minute, h - hour, d - day
 * Examples: "2h", "5d", "30s", "15m"
 * @returns Boolean representing if timestamp is still valid
 */

export default function isTimestampValid(previousTimestamp: number, allowedPassedTime: string) {
    const allowedTime = getTimestampFromString(allowedPassedTime);
    const currentTimestamp = Date.now();

    return previousTimestamp + allowedTime > currentTimestamp;
}

function getTimestampFromString(timeString: string) {
    const timeUnit = timeString.match(/[a-z]+/gi)?.[0];
    const unitAmount = parseFloat(timeString); 

    if (!timeUnit || !unitAmount) throw new Error(`${timeString} is not valid timeString.`)
    
    const timeUnitInMilesecond = timeUnits[timeUnit];

    if (!timeUnitInMilesecond) throw new Error(`${timeUnit} is not valid time unit. Consider using following: s - second, m - minute, h - hour, d - day`);

    return timeUnitInMilesecond*unitAmount;
}

type TimeUnits = {
    [key: string]: number
}

const timeUnits: TimeUnits = {
    "s": 1000,
    "m": 60*1000,
    "h": 60*60*1000,
    "d": 24*60*60*1000,
}