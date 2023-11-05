// Code your solution in this file!
function returnFirstTwoDrivers(arry){
    const a = [arry[0] ]
    a.push(arry[1])
    return a 
}
function returnLastTwoDrivers(arry){
    const a = [arry[arry.length - 2] ]
    a.push(arry[arry.length - 1])
    return a 
}
function selectingDrivers(arry){
    const a = returnFirstTwoDrivers(arry)
    const b = returnLastTwoDrivers(arry)
    arry[0] = a
    arry[arry.length - 1] = b
    return arry
}
function createFareMultiplier(inty){
    const multiplier = function(){
        inty * inty
    }
    return multiplier
}
function fareDoubler(inty){
    const i = inty * 2
    return i
}

const fareTripler = ((i) => {
    return i*3
})

function selectDifferentDrivers(arry, fn){
    return fn(arry)

}