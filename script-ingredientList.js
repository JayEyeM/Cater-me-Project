function addData() {
    //get data from New Ingredient form
    var ingredientName = document.getElementById('ingredientName').value;
    var quantity = document.getElementById('quantity').value;
    var units = document.getElementById('units').value;
    var price = document.getElementById('price').value;
    var portions = document.getElementById('portions').value;

    //Confirm needed fields are completed
    if (!ingredientName || !quantity || !units || !price){
        alert('Please fill out field');
        return;
    }

    //Adding a new row
    var newRow = document.createElement('tr');
    
    //Appending newly created cells
    var ingredientNameCell = document.createElement('td');
    ingredientNameCell.textContent = ingredientName;
    newRow.appendChild(ingredientNameCell);

    var quantityCell = document.createElement('td');
    quantityCell.textContent = quantity;
    newRow.appendChild(quantityCell);

    var unitsCell = document.createElement('td');
    unitsCell.textContent = units;
    newRow.appendChild(unitsCell);

    var priceCell = document.createElement('td');
    priceCell.textContent = price;
    newRow.appendChild(priceCell);

    var portionsCell = document.createElement('td');
    portionsCell.textContent = portions;
    newRow.appendChild(portionsCell);

    //Creating the ability to delete items from table with delete button next to each item.
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Ingredient';
    deleteButton.className = 'buttons delete-button';
    deleteButton.onclick = function() {
        deleteRow(newRow);
    };

    //appending delete button to a cell.
    var deleteIngredientCell = document.createElement('td');
    deleteIngredientCell.appendChild(deleteButton);
    newRow.appendChild(deleteIngredientCell);


//appending new rows to the tablebody
document.getElementById('ingredientData').appendChild(newRow);

//clearing the form inputs
document.getElementById('ingredientName').value = '';
document.getElementById('quantity').value = '';
document.getElementById('units').value = '';
document.getElementById('price').value = '';
document.getElementById('portion').value = '';
}

function deleteRow(row) {
    //remove it from table
    row.parentNode.removeChild(row);
}