const mapToNegativize = function(sourceArray) {
    return sourceArray.map(element => element*-1)
}

const mapToNoChange = function(sourceArray){
    return sourceArray.map(element => element)
}

const mapToDouble = function(sourceArray){
    return sourceArray.map(element => element*2)
}

const mapToSquare = function(sourceArray){
    return sourceArray.map(element => element**2)
}

const reduceToTotal = function(sourceArray, startingPoint = 0){
    return sourceArray.reduce((a, b) => a + b, startingPoint)
}

const reduceToAllTrue = function(sourceArray){
    return !!sourceArray.reduce((a,b) => a && b)
}

const reduceToAnyTrue = function(sourceArray){
    return !!sourceArray.reduce((a,b) => a || b)
}