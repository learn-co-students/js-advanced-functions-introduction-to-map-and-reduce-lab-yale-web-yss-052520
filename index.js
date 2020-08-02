// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num ** 2)
}

function reduceToTotal(array, startingPoint) {
    if (startingPoint) {
        return array.reduce((agg, num) => (agg + num), startingPoint )
    } else {
        return array.reduce((agg, num) => (agg + num))
    }
}

function reduceToAllTrue(array) {
    return array.reduce((agg, el) => agg = !!el)
}

function reduceToAnyTrue(array) {
    return array.reduce((agg, el) => {
        return !!el ? true : false
    })
}