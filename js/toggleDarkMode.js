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

    let element = document.getElementsByClassName('main-view');
    for (i = 0; i < element.length; i++) {
        element[i].classList.toggle('dark-mode-1');
    }

    let element1 = document.getElementsByClassName('modal-content-new');
    for (i = 0; i < element1.length; i++) {
        element1[i].classList.toggle('dark-mode-1');
    }

    let element2 = document.getElementsByClassName('modal-new-buttons');
    for (i = 0; i < element2.length; i++) {
        element2[i].classList.toggle('dark-mode-1');
    }

    let element3 = document.getElementsByClassName('modal-edit-buttons');
    for (i = 0; i < element3.length; i++) {
        element3[i].classList.toggle('dark-mode-1');
    }

    let element4 = document.getElementsByClassName('modal-content-edit');
    for (i = 0; i < element4.length; i++) {
        element4[i].classList.toggle('dark-mode-1');
    }

    let elementFilterStatus = document.getElementsByClassName('filter-status');
    for (i = 0; i < elementFilterStatus.length; i++) {
        elementFilterStatus[i].classList.toggle('dark-mode-1');
    }

    // Dark Mode 2

    let element5 = document.getElementsByClassName('input');
    for (i = 0; i < element5.length; i++) {
        element5[i].classList.toggle('dark-mode-2');
    }

    let elementInput = document.getElementsByClassName('status');
    for (i = 0; i < elementInput.length; i++) {
        elementInput[i].classList.toggle('dark-mode-2');
    }

    let elementDetails = document.getElementsByClassName('details');
    for (i = 0; i < elementDetails.length; i++) {
        elementDetails[i].classList.toggle('dark-mode-2');
    }

    let elementInvoice = document.getElementsByClassName('invoices-element');
    for (i = 0; i < elementInvoice.length; i++) {
        elementInvoice[i].classList.toggle('dark-mode-2');
    }

    // Dark Mode 3

    let element6 = document.getElementsByClassName('modal-container-edit');
    for (i = 0; i < element6.length; i++) {
        element6[i].classList.toggle('dark-mode-3');
    }

    let element7 = document.getElementsByClassName('modal-container-new');
    for (i = 0; i < element7.length; i++) {
        element7[i].classList.toggle('dark-mode-3');
    }

    // Dark Mode 4

    let element8 = document.getElementsByClassName('amount');
    for (i = 0; i < element8.length; i++) {
        element8[i].classList.toggle('dark-mode-4');
    }

    // Dark Mode 5

    let elementInvoiceTable = document.getElementsByClassName('invoice-table');
    for (i = 0; i < elementInvoiceTable.length; i++) {
        elementInvoiceTable[i].classList.toggle('dark-mode-5');
    }

    let elementBtnEdit = document.getElementsByClassName('edit');
    for (i = 0; i < elementBtnEdit.length; i++) {
        elementBtnEdit[i].classList.toggle('dark-mode-5');
    }

    // Dark Mode 6

    let elementBack = document.getElementsByClassName('back-paragraph');
    for (i = 0; i < elementBack.length; i++) {
        elementBack[i].classList.toggle('dark-mode-6');
    }

    let elementPlaceholder = document.getElementsByClassName('whitePlaceholder');
    for (i = 0; i < elementPlaceholder.length; i++) {
        elementPlaceholder[i].classList.toggle('dark-mode-6');
    }

    // Dark Mode 7

    let elementPending = document.getElementsByClassName('status-value-update');
    for (i = 0; i < elementPending.length; i++) {
        elementPending[i].classList.toggle('dark-mode-7');
    }

    let elementPaid = document.getElementsByClassName('status-value-update-paid');
    for (i = 0; i < elementPaid.length; i++) {
        elementPaid[i].classList.toggle('dark-mode-7');
    }

}