// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
async function getData() {
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await (await x).json()
    console.log(data);
    return data

    // console.log(x)
    // return 455
    // .then(response => response.json())
    // .then(json => console.log(json))
}
async function main() {

    console.log("Loading Modules")
    console.log("DO soething else")
    console.log("Load Data")
    let data = await getData() //await works same as then
    console.log(data)
    console.log("process data");
    console.log("task 2");
}
main()



const url = 'https://api.example.com/posts'; // Replace with your API endpoint
const dataToSend = {
    title: 'My New Post',
    body: 'This is the content of my new post.',
    userId: 1
};

fetch(url, {
    method: 'POST', // Specify the HTTP method as POST
    headers: {
        'Content-Type': 'application/json' // Indicate that the body contains JSON
    },
    body: JSON.stringify(dataToSend) // Convert the data object to a JSON string
})
.then(response => {
    if (!response.ok) {
        // Handle non-successful responses (e.g., 404, 500)
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON response body
})
.then(data => {
    console.log('Success:', data); // Log the response data from the server
})
.catch(error => {
    console.error('Error during fetch:', error); // Handle any errors during the fetch operation
});



// data.then((v) => {
//     console.log(data)

//     console.log("process data");
//     console.log("task 2");
// })
