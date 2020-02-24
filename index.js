// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => { return drivers.slice(0, 2) }
const returnLastTwoDrivers = (drivers) => { return drivers.slice(2, 4) }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (fare)=>{
 return  (value) => {
     return fare * value
 }
}
const fareDoubler = (fare) => {
    return fare * 2
}
const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (drivers,selectingDrivers) => {
    return selectingDrivers(drivers)
}
