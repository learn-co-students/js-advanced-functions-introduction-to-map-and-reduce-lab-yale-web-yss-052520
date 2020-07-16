// Your code here

const mapToNegativize = sourceArray => sourceArray.map(num => -num)
const mapToNoChange = sourceArray => sourceArray
const mapToDouble = sourceArray => sourceArray.map(num => num*2)
const mapToSquare = sourceArray => sourceArray.map(num => num*num)

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((a, b) => a + b, startingPoint)
}

const reduceToAllTrue = function(sourceArray) {
    return !!sourceArray.reduce((a, b) => a && b)
}

const reduceToAnyTrue = function(sourceArray) {
    return !!sourceArray.reduce((a, b) => a || b)
} 