// Your code here
const mapper = (arr, fn) => {
    let copy = [...arr];
    for (let index in arr){
        copy[index] = fn(copy[index]);
    }
    return copy;
}

const reducer = (arr, fn, start = arr[0]) =>{
    var value = (start == arr[0]) ? start : fn(start, arr[0]);
    for (let val of arr.slice(1)){
        value = fn(value, val)
    }
    return value;
}

const mapToNegativize = (arr) =>{
    return mapper(arr, (num) => {return -1 * num});
}

const mapToNoChange = (arr) => {
    return mapper(arr, (item) => {return item});
}

const mapToDouble = (arr) => {
    return mapper(arr, (num) => {return num * 2});
}
const mapToSquare = (arr) => {
    return mapper(arr, (num) => {return num ** 2});
}

const reduceToTotal = (arr, start) => {
    return reducer(arr, (val_1, val_2) => {
        return val_1 + val_2;
    }, start)
}

const reduceToAllTrue = (arr) => {
    return reducer(arr, (val_1, val_2) => {
        return !!val_1 && !!val_2;
    })
}

const reduceToAnyTrue = (arr) => {
    return reducer(arr, (val_1, val_2) => {
        return !!val_1 || !!val_2;
    })
}