document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestCategorySelect = document.getElementById('guest-category');
    const guestList = document.getElementById('guestList');

    guestForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = guestNameInput.value.trim();
        const category = guestCategorySelect.value;

        if (!name || !category) return;

        const li = document.createElement('li');
        li.textContent = `${name} (${category.charAt(0).toUpperCase() + category.slice(1)})`;

        // Optional: Add a remove button for each guest
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.type = 'button';
        removeBtn.addEventListener('click', () => {
            guestList.removeChild(li);
        });

        li.appendChild(removeBtn);
        guestList.appendChild(li);

        guestForm.reset();
        guestCategorySelect.selectedIndex = 0;
        
        //clear the input field
        guestNameInput.value = '';

        //clear all guests
        clearListButton = document.getElementById('clear-list');
        clearListButton.addEventListener('click', () => {
            guestList.innerHTML = '';
        });

        const rsvpButton = document.createElement('rsvp-button');
        rsvpButton.textContent = 'attending';
        rsvpButton.className = 'edit-guest';
        rsvpButton.addEventListener('click', () => {
            if (rsvpButton.textContent === 'attending') {
                rsvpButton.textContent = 'not attending';
                rsvpButton.className = 'not-attending';
            } else {
                rsvpButton.textContent = 'attending';
                rsvpButton.className = 'edit-guest';
            }
        });
    });
});