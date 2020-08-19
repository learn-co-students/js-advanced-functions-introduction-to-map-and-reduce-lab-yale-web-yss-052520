// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(thing => thing)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num**2)
}

function reduceToTotal(sourceArray, startingPoint) {
    return sourceArray.reduce((total, next) => total + next, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i] == true) {
            return false
        }
        return true 
    }
}

function reduceToAnyTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true 
        } else {
            return false 
        }
    }
}