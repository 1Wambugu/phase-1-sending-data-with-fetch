// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    const data = {
      name: name,
      email: email
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    };
  
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    const data = {
      name: name,
      email: email
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    };
  
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(parsedData => {
        // Access the newly converted object and find the new id
        const newId = parsedData.id;
        // Append the new id to the DOM
        document.body.innerHTML += `<p>Newly Assigned ID: ${newId}</p>`;
      })
      .catch(error => {
        // Display the error message on the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    const data = {
      name: name,
      email: email
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    };
  
    // Return the fetch promise
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(parsedData => {
        // Access the newly converted object and find the new id
        const newId = parsedData.id;
        // Append the new id to the DOM
        document.body.innerHTML += `<p>Newly Assigned ID: ${newId}</p>`;
      })
      .catch(error => {
        // Display the error message on the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  // Example usage:
  const nameValue = 'John Doe';
  const emailValue = 'johndoe@example.com';
  
  // You can still chain more then() and catch() calls here if needed.
  submitData(nameValue, emailValue)
    .then(() => {
      console.log('Fetch chain extended with a new then() call.');
      // Do something else after successful POST request if needed.
    })
    .catch(error => {
      console.log('Fetch chain extended with a new catch() call.');
      // Handle errors if needed.
    });
  