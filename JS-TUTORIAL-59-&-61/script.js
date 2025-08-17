let random = Math.random
let a = prompt("Enter First number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}

if (random > 0.1) {
    // Perfrom correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)


}