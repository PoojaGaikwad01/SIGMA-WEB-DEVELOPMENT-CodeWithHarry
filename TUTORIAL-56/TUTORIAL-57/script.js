console.log("I am a Tutorial on LOOP")

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

let obj = {
    name: "Pooja",
    role: "Developer",
    company: "Google"

}

for (const key in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element)

    // }
}
for (const c of "Pooja") {
    console.log(c)

}
let i = 0;
while (i < 6) {
    console.log(i)
    i++
}

let j = 10; 
do {
    console.log(j)
    j++
} while (j < 6)