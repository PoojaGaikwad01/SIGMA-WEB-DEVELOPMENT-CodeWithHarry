let arr = [1, 3, 4, 5, 6, 8]
arr[0] = 908
console.log(arr)
console.log(arr.length)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[3])
console.log(typeof arr)

console.log(arr.toString)
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.push("Pooja"))
console.log(arr)
console.log(arr.shift())
console.log(arr.unshift("Payal"))
console.log(delete [5])
console.log(arr)


let a = [1, 2]
let b = [9, 8]
let c = [663, 45]
console.log(a.concat(b, c))

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }
let a1 = [9, 56, 78, 8, 3, 4]
// a1.forEach((value, index, arr) => {
//     console.log((value, index, arr))

// })

// let obj = {
//     a: 1,
//     b: 5,
//     c: 7

// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)

//     }
// }

for (const value of a1) {
    console.log(value)

}