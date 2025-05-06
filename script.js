function calculateTotal() {
  // Select all the price elements in the table
  const prices = document.querySelectorAll('.prices');
  
  // Initialize a variable to store the total price
  let total = 0;

  // Loop through each price element, convert the value to a number, and add it to the total
  prices.forEach(price => {
    // Convert the price string (e.g., "$1.00") to a number (e.g., 1.00)
    const priceValue = parseFloat(price.textContent.replace('$', '').trim());
    total += priceValue;
  });

  // Create a new row to show the total
  const totalRow = document.createElement('tr');
  
  // Create the first cell (empty for now, it will be merged later)
  const emptyCell = document.createElement('td');
  emptyCell.setAttribute('colspan', '2');  // Make it span across both columns
  totalRow.appendChild(emptyCell);

  // Create the second cell for the total price
  const totalCell = document.createElement('td');
  totalCell.textContent = 'Total: $' + total.toFixed(2); // Format the total to two decimal places
  totalRow.appendChild(totalCell);

  // Append the total row to the table body
  const tableBody = document.querySelector('#grocery-table tbody');
  tableBody.appendChild(totalRow);
}
