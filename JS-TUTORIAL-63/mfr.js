let arr = [1, 12, 3, 5, 7, 15, 20];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)

// }

let newArr = arr.map(e => {
    return (e ** 2)
})
console.log(newArr)


const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))

let arr2 = [1, 9, 8, 2, 3, 7, 4, 6, 5]
const red = (a, b) => {
    return a * b
}
console.log(arr2.reduce(red))

let arr3 = Array.from("Pooja")
console.log(arr3)
