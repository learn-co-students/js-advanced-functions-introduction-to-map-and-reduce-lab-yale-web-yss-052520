// Your code here

const mapToNegativize = sourceArray => sourceArray.map(n => -n)
const mapToNoChange = sourceArray => sourceArray
const mapToDouble = sourceArray => sourceArray.map(n => 2*n)
const mapToSquare = sourceArray => sourceArray.map(n => n**2)

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((m, n) => m + n, startingPoint)
}

const reduceToAllTrue = function(sourceArray) {
    return !!sourceArray.reduce((m, n) => m && n)
}

const reduceToAnyTrue = function(sourceArray) {
    return !!sourceArray.reduce((m, n) => m || n)
}