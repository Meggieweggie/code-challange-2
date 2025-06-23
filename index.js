document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guest-form');
    const guestList = document.getElementById('guest-list');
    const guestNameInput = document.getElementById('guest-name');
    const guestCategoryInput = document.getElementById('guest-category');
    const clearListButton = document.getElementById('clear-list');

    if (!form || !guestList || !guestNameInput || !guestCategoryInput || !clearListButton) {
        console.error('One or more required elements are missing in the HTML.');
        return;
    }

    const MAX_GUESTS = 10;

    // Add guest count display
    const guestCount = document.createElement('div');
    guestCount.id = 'guest-count';
    guestCount.style.marginBottom = '10px';
    guestList.parentNode.insertBefore(guestCount, guestList);

    function updateGuestCount() {
        guestCount.textContent = `Guests: ${guestList.children.length} / ${MAX_GUESTS}`;
    }
    function getCategoryColor(category) {
        switch (category) {
            case 'Friend': return '#4caf50';
            case 'Family': return '#2196f3';
            case 'Colleague': return '#ff9800';
            default: return '#ccc';
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const guestName = guestNameInput.value.trim();
        const guestCategory = guestCategoryInput.value;

        if (!guestName) return;

        if (guestList.children.length >= MAX_GUESTS) {
            alert('Guest list is full! Maximum 10 guests allowed.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('guest-item');

        // Guest name
        const nameSpan = document.createElement('span');
        nameSpan.className = 'guest-name';
        nameSpan.textContent = guestName;

        // Category tag
        const categoryTag = document.createElement('span');
        categoryTag.className = 'category-tag';
        categoryTag.textContent = guestCategory;
        categoryTag.style.backgroundColor = getCategoryColor(guestCategory);
        categoryTag.style.color = '#fff';
        categoryTag.style.padding = '2px 8px';
        categoryTag.style.marginLeft = '8px';
        categoryTag.style.borderRadius = '8px';
        categoryTag.style.fontSize = '0.8em';

        // Timestamp (date and time)
        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        const now = new Date();
        timestamp.textContent = `Added: ${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        timestamp.style.marginLeft = '10px';
        timestamp.style.fontSize = '0.8em';
        timestamp.style.color = '#888';

        // RSVP button (toggle color and label)
        const rsvpButton = document.createElement('button');
        rsvpButton.className = 'toggle-rsvp';
        rsvpButton.textContent = 'Will Attend';
        rsvpButton.style.backgroundColor = '#4caf50';
        rsvpButton.style.color = '#fff';
        rsvpButton.addEventListener('click', () => {
            if (rsvpButton.textContent === 'Will Attend') {
                rsvpButton.textContent = 'Will Not Attend';
                rsvpButton.style.backgroundColor = '#f44336';
            } else {
                rsvpButton.textContent = 'Will Attend';
                rsvpButton.style.backgroundColor = '#4caf50';
            }
        });

        // Edit button (edit name and category)
        const editButton = document.createElement('button');
        editButton.className = 'edit-guest';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newName = prompt('Edit guest name:', nameSpan.textContent);
            if (newName && newName.trim()) {
                nameSpan.textContent = newName.trim();
            }
            const newCategory = prompt('Edit category (Friend, Family, Colleague):', categoryTag.textContent);
            if (newCategory && newCategory.trim()) {
                categoryTag.textContent = newCategory.trim();
                categoryTag.style.backgroundColor = getCategoryColor(newCategory.trim());
            }
        });

        // Remove button (confirmation)
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-guest';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            if (confirm('Remove this guest?')) {
                listItem.remove();
                updateGuestCount();
            }
        });

        listItem.append(nameSpan, categoryTag, timestamp, rsvpButton, editButton, removeButton);
        guestList.appendChild(listItem);

        guestNameInput.value = '';
        updateGuestCount();
    });

    clearListButton.addEventListener('click', () => {
        guestList.innerHTML = '';
        updateGuestCount();
    });

    updateGuestCount();
});
console.log('Guest list application initialized.');
document.addEventListener('DOMContentLoaded', () => {
    
});

