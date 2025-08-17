function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are nice and you tutorials to!")
    console.log("Hey " + name + " you are good guy!")
    console.log("Hey " + name + " you are nice programmer!")
    console.log("Hey " + name + " you are nice in comedy also!")

}
nice("Pooja")

function sum(a, b) {
    return a + b;

}
result = sum(4, 6)
console.log("The sum of a and b is : " + result)

function summ(c, d, e = 4) {
    console.log(c, d, e)
    return c + d + e;

}
result1 = summ(4, 6)
result2 = summ(10, 6)
result3 = summ(4, 15)
result4 = summ(7, 8)
result5 = summ(5, 9)
console.log("The sum of c, d and e is : " + result1)
console.log("The sum of c, d and e is : " + result2)
console.log("The sum of c, d and e is : " + result3)
console.log("The sum of c, d and e is : " + result4)
console.log("The sum of c, d and e is : " + result5)

// storing function inside a variable
const func1 = (x) => {
    console.log("I am the arrow finction", x)

}
func1(34)
func1(74)
func1(82)
func1(59)
