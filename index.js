// Your code here
function mapToNegativize(numbers) {
    let positive = numbers.map(Math.abs)
    return positive.map(number => number * (-1))
}

function mapToNoChange(numbers) {
    return numbers
}

function mapToDouble(numbers) {
    return numbers.map(
        number => number * 2
    )
}

function mapToSquare(numbers) {
    return numbers.map(
        number => number * number
    )
}

function reduceToTotal(numbers, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    return total
}

function reduceToAllTrue(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (!numbers[i]) return false
    }
    return true
}

function reduceToAnyTrue(numbers) {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]) return true
    }
    return false
}