//post method
// let url = "http://localhost:3000/posts";
// let todoObject = {
//   name: "sanjay",
//   age: 34,
// };
// const options = {
//   method: "POST",
//   body: JSON.stringify(todoObject),
//   headers: { "Content-Type": "application/json" },
// };

// fetch(url, options);

//delete method
// const deleteMethod = {
//   method: "DELETE", // Method itself
//   headers: {
//     "Content-type": "application/json; charset=UTF-8", // Indicates the content
//   },
//   // No need to have body, because we don't send nothing to the server.
// };
// // Make the HTTP Delete call using fetch api
// fetch("http://localhost:3000/posts/" + 5, deleteMethod);

//put

// const putMethod = {
//   method: "PUT", // Method itself
//   headers: {
//     "Content-type": "application/json; charset=UTF-8", // Indicates the content
//   },
//   body: JSON.stringify({ name: "ajinkya" }), // We send data in JSON format
// };

// // make the HTTP put request using fetch api
// fetch("http://localhost:3000/posts/" + 2, putMethod)
//   .then((response) => response.json())
//   .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
//   .catch((err) => console.log(err));
