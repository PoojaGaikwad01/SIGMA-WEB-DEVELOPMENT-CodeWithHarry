console.log("Pooja is Hacker")
console.log("Harry is Hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0); //run after 2 sec
setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000); //run after 2 sec

console.log("The End")

const fn = () => {
    console.log("Nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}


// const callback = (arg) => {
//     console.log(arg)
// }
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Pooja",fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)