


let steem = () => {
    fetch('http://127.0.0.1:3001/art_work') // Adjust the URL to match your backend endpoint
        .then(response => response.json())
        .then(data => {
            // Process the fetched JSON data
            displayObjectFields(data)
        })
        .catch(error => {
            displayErrorMessage(error);
            console.log('Error fetching data:', error);
        });
}
// Function to display object fields in HTML

function displayErrorMessage(message) {
    // Get the error message div
    const errorMessageDiv = document.getElementById('errorMessage');

    // Set the error message in the div
    errorMessageDiv.textContent = message;
}

function displayObjectFields(data) {


    let objectList = document.getElementById('objectList');

    // Iterate through the array of objects
    data.forEach(function (obj) {
        // Create a new <li> element
        let listItem = document.createElement('li');

        // Set the inner text of the <li> element to the value of the 'name' field
        listItem.textContent = obj.title;

        // Append the <li> element to the <ul> element
        objectList.appendChild(listItem);
    });


}

function submitForm() {

    // Get the form element

    var form = document.getElementById("myForm");

    // Submit the form
    const postData = {
        "art_work": { "title": form.username.value }
    };


    const url = 'http://127.0.0.1:3001/art_work';

    // Make the POST request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(postData) // Convert the data to JSON format
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

