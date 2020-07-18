// Your code here

function mapToNegativize(arr){
    return arr.map(el => -el)
}

function mapToNoChange(arr){
    return arr
}

function mapToDouble(arr){
    return arr.map(el => 2*el)
}

function mapToSquare(arr){
    return arr.map(el => el*el)
}

function reduceToTotal(arr, startingpoint = 0){
    return arr.reduce((acc, el) => acc + el, startingpoint)
}

function reduceToAllTrue(arr){
    let result = arr.reduce((acc, el) => acc && el, true)
    if (result) return true
    else return false
}

function reduceToAnyTrue(arr){
    let result = arr.reduce((acc, el) => acc || el, false)
    if (result) return true
    else return false
}