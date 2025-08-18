console.log("Harry")
// let poojaGaikwad = document.getElementsByClassName("box")
// console.log(poojaGaikwad)

// poojaGaikwad[2].style.backgroundColor = "blue";

// document.getElementById("blue").style.backgroundColor = "blue";

// document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"

})
console.log(document.getElementsByTagName("div"))
// console.log(e[4].matches("blue"))