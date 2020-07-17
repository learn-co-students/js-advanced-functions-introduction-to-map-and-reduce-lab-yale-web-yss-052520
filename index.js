// Your code here

function mapHelper(arr, multiplier) {
    let newArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        newArr[i] *= multiplier 
    }
    return newArr 
}

const mapToNegativize = (arr) => mapHelper(arr, -1)
const mapToNoChange = (arr) => [...arr]
const mapToDouble = (arr) => mapHelper(arr, 2)

const mapToSquare = (arr) => arr.map(num => num**2)

const reduceToTotal = (arr, memo = 0) => {
    arr.forEach(item => memo += item )
    return memo 
}

const reduceToAllTrue = (arr) => {
    if (arr.length === 0) { return true }
    else {return arr[0] && reduceToAllTrue(arr.splice(1))}
}


const reduceToAnyTrue = (arr) => {
    if (arr.length === 0) { return false }
    else {return arr[0] || reduceToAnyTrue(arr.splice(1))}
}