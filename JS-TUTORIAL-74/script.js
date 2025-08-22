let button = document.getElementById("btn")

// button.addEventListener("click", () => {
button.addEventListener("dblclick", () => {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked<b> Enjoy your click!"
})
button.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right click Please")
})
document.addEventListener("keydown", (e) => {
    console.log(e)
})