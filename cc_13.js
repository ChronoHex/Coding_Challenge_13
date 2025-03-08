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