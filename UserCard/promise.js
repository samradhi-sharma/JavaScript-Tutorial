function getDetails(id) {
    fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
        // Check if the response is okay, else throw an error
        if (!response.ok) {
            throw new Error("ID does not match any data");
        }
        // Parse the response JSON if the request was successful
        return response.json();
    })
    .then((user) => {
        console.log(user); // Log user details
    })
    .catch((err) => {
        console.error("Error:", err.message); // Handle any errors that occurred during the fetch
    });
}

// Example call with ID 2
getDetails(0);
