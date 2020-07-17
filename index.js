// Your code here

function mapToNegativize(sourceArray){
    const result = []
    sourceArray.forEach(element => result.push(element * -1))
    return result
}
function mapToNoChange(sourceArray){
    const result = []
    sourceArray.forEach(element => result.push(element))
    return result
}
function mapToDouble(sourceArray){
    const result = []
    sourceArray.forEach(element => result.push(element * 2))
    return result
}
function mapToSquare(sourceArray){
    const result = []
    sourceArray.forEach(element => result.push(element * element))
    return result
}

function reduceToTotal(sourceArray, startingPoint=0){
    sourceArray.forEach(element => startingPoint +=element)
    return startingPoint
}
function reduceToAllTrue(sourceArray){
    for (let i =0;i<sourceArray.length;i++){
        if (!sourceArray[i]) return false
    }
    return true
}
function reduceToAnyTrue(sourceArray){
    for (let i =0;i<sourceArray.length;i++){
        if (sourceArray[i]) return true
    }
    return false
}