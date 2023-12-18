function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pinCode = document.getElementById('pinCode').value;
    const gender = document.getElementById('gender').value;
    const foodChoices = Array.from(document.getElementById('foodChoices').selectedOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create a new table row
    const tableRow = document.createElement('tr');

    // Append the values to the row
    tableRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pinCode}</td>
      <td>${gender}</td>
      <td>${foodChoices.join(', ')}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;

    // Append the row to the table
    document.getElementById('tableBody').appendChild(tableRow);

    // Clear the form fields
    document.getElementById('userForm').reset();
  }