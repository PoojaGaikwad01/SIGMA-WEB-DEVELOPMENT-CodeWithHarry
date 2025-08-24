// function createcard(title, cName, views, monthsOld, duration, thumbnail) {

//     let viewStr;
//     if (views < 1000000) {
//         viewStr = views / 1000 + "K";

//     }
//     else if (views > 1000000) {
//         viewStr = views / 1000000 + "M";
//     }
//     else {
//         viewStr = views / 1000 + "K";
//     }
//     let html = '<div class="card">
//         < div class="image" >
//                 <img src = "${thumbnail}"
//                     alt="">
//                        <div class="capsule">${duration}</div> 
//             </div>
//             <div class="text">
//                 <h1>${title}</h1>
//                 <p>${cName} . ${viewStr} views . 2 months ago </p>
//             </div>
//         </div > '

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
// }

// createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWIthHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAPrVzyLHFYcUIk5bv_LXaJrgOztA")


function createcard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views  // formatted to 1 decimal
    }
    else if (views >= 1000000) {
        viewStr = (views / 1000000) + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} · ${viewStr} views · ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}

createcard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAPrVzyLHFYcUIk5bv_LXaJrgOztA"
);
