// Your code here
function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i] * -1;
  }
  return sourceArray
}

function mapToNoChange(sourceArray){
  return sourceArray
}

function mapToDouble(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i] * 2;
  }
  return sourceArray
}

function mapToSquare(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i] ** 2;
  }
  return sourceArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for (let i = 0; i < sourceArray.length; i++) {
    startingPoint += sourceArray[i];
  }
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  let result = true
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == false) {
      result = false
    }
  }
  return result
}

function reduceToAnyTrue(sourceArray) {
  let result = false
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == true) {
      return true
    }
  }
  return result
}