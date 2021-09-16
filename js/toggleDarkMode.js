function changeImage() {
    let img = document.getElementById('imgClickAndChange');
    if (img.src.match("/assets/icon-moon.svg")) {
        img.src = "/assets/icon-sun.svg";
    } else {
        img.src = "/assets/icon-moon.svg";
    }
}


function toggleDarkMode() {

    // Dark Mode 1

    document.querySelector('.main-view').classList.toggle('dark-mode-1');
    document.querySelector('.modal-content-new').classList.toggle('dark-mode-1');
    document.querySelector('.modal-new-buttons').classList.toggle('dark-mode-1');
    document.querySelector('.modal-edit-buttons').classList.toggle('dark-mode-1');
    document.querySelector('.modal-content-edit').classList.toggle('dark-mode-1');
    document.querySelector('.filter-status').classList.toggle('dark-mode-1');

    // Dark Mode 2

    document.querySelector('.input').classList.toggle('dark-mode-2');
    document.querySelector('.status').classList.toggle('dark-mode-2');
    document.querySelector('.details').classList.toggle('dark-mode-2');
    document.querySelector('.invoices-element').classList.toggle('dark-mode-2');

    // Dark Mode 3

    document.querySelector('.modal-container-edit').classList.toggle('dark-mode-3');
    document.querySelector('.modal-container-new').classList.toggle('dark-mode-3');

    // Dark Mode 4

    document.querySelector('.amount').classList.toggle('dark-mode-4');

    // Dark Mode 5

    document.querySelector('.invoice-table').classList.toggle('dark-mode-5');
    document.querySelector('.edit').classList.toggle('dark-mode-5');

    // Dark Mode 6

    document.querySelector('.back-paragraph').classList.toggle('dark-mode-6');
    document.querySelector('.whitePlaceholder').classList.toggle('dark-mode-6');

    // Dark Mode 7

    document.querySelector('.status-value-update').classList.toggle('dark-mode-7');
    document.querySelector('.status-value-update-paid').classList.toggle('dark-mode-7');
}