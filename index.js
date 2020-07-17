// Your code here

function mapToNegativize(ar) {
    let newAr= []
    for (let x=0; x < ar.length; x++) { 
        newAr[x] = -(ar[x])
    }
    return newAr
}

function mapToNoChange(ar) {
    // let newAr= []
    // for (let x=0; x < ar.length; x++) { 
    //     newAr[x] = -(ar[x])
    // }
    // return newAr
    return Object.assign([], ar)
}

function mapToDouble(ar) {
    let newAr= []
    for (let x=0; x < ar.length; x++) { 
        newAr[x] = (ar[x]*2)
    }
    return newAr
}

function mapToSquare(ar) {
    let newAr= []
    for (let x=0; x < ar.length; x++) { 
        newAr[x] = (ar[x]**2)
    }
    return newAr
}

function reduceToTotal(ar, st=0) {
    let mem = st
    for (let x=0; x < ar.length; x++) { 
        mem = mem + ar[x]
    }
    return mem
}

function reduceToAllTrue(ar) {
    for (let x=0; x < ar.length; x++) { 
        if (!ar[x]) {return false}
    }
    return true
}

function reduceToAnyTrue(ar) {
    for (let x=0; x < ar.length; x++) { 
        if (ar[x]) {return true}
    }
    return false
}