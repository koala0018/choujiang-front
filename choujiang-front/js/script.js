const editButtons = document.getElementsByClassName('edit-btn');

for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', function () {
        toggleEditMode(this);
    });
}

function toggleEditMode(btn) {
    const row = btn.parentNode.parentNode;
    const cells = row.getElementsByClassName('edit-content');

    row.classList.toggle('edit-mode');

    for (let i = 0; i < cells.length; i++) {
        const content = cells[i].textContent;
        cells[i].innerHTML = `<input type="text" class="edit-input" value="${content}">`;
    }

    if (row.classList.contains('edit-mode')) {
        btn.innerText = 'Save';
    } else {
        btn.innerText = 'Edit';
        updateRowData(row);
    }
}

function updateRowData(row) {
    const inputs = row.getElementsByClassName('edit-input');
    const cells = row.getElementsByClassName('edit-content');

    for (let i = 0; i < inputs.length; i++) {
        const inputValue = inputs[i].value;
        cells[i].textContent = inputValue;
    }
}
