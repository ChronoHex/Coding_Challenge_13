// task 2
function addEmployeeCard(name, position) {

    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');

    const heading = document.createElement('h3');
    heading.textContent = name;

    const paragraph = document.createElement('h3');
    paragraph.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // appending elements to the card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(removeButton);

    // appending card to employee container
    document.getElementById('employeeContainer').appendChild(card);

    // remove functionality
    removeButton.addEventListener('click', function(event) {
        // task 4
        if (event.target.className === 'employee-card') {
            console.log('Employee card has been clicked')
        }
        event.stopPropagation();
        card.remove();
    });

    // task 5
    editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;

        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // appending new functions
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton);

        // save button listener
        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;

            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
        });
    });
}

// example employees
addEmployeeCard('Ed', 'Tester');
addEmployeeCard('Edd', 'Diagnostics');
addEmployeeCard('Eddy', 'Manager');

// task 3
function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.style.backgroundColor = 'lightgreen';
    });
};

// activating bulk update function
bulkUpdateEmployeeCards();