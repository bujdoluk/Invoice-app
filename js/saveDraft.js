'use strict';

let invoices = new Array();
let invoice = new Object();

invoice.myAddress = document.getElementById('myAddress').value;
invoice.myCity = document.getElementById('myCity').value;
invoice.myPostCode = document.getElementById('myPostCode').value;
invoice.myCountry = document.getElementById('myCountry').value;
invoice.clientName = document.getElementById('clientName').value;
invoice.clientEmail = document.getElementById('clientEmail').value;
invoice.clientAddress = document.getElementById('clientAddress').value;
invoice.clientCity = document.getElementById('clientCity').value;
invoice.clientPostCode = document.getElementById('clientPostCode').value;
invoice.clientCountry = document.getElementById('clientCountry').value;
invoice.invoiceDate = document.getElementById('invoiceDate').value;
invoice.paymentTerms = document.getElementById('paymentTerms').value;
invoice.projectDescription = document.getElementById('projectDescription').value;

function renderInvoice() {

    document.getElementById('invoices-array').innerHTML =

        `<div class="invoices-element">
            <div>${generateID()}</div>
            <div class="grey">${invoice.invoiceDate}</div>
            <div class="grey">${invoice.clientName}</div>
            <div class="bold">120</div>
            <div class="right">
            <div class="status-value-udpate-draft"><span class="status-dot-draft">&#11044;</span> Draft</div>
            <div><img class="arrow-right" src="/assets/icon-arrow-right.svg" alt="Arrow right"></div>
            </div>
        </div>`;
}

function saveDraft() {
    let drafts = [];

    document.getElementById('empty').style.display = 'none';

    drafts.push(invoice);
    console.log(drafts)

    invoices.push(drafts);
    console.log(invoices);

    document.getElementById('new').style.display = 'none';


    renderInvoice();
}

function generateID() {
    const symbol = "#";
    const numbers = Math.floor((Math.random() * 8999) + 1000);
    const letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();

    const id = symbol + letters + numbers;

    return id;
}

// function check() {
//     let valid = true;
//     let error = "";
//     let field = "";

//     field = document.getElementById('clientName');
//     error = document.getElementById('cname');

//     if (!field.checkValidity()) {
//         valid = false;
//         field.classList.add("err");
//         error.innerHTML = "Name must be 2-4 characters\r\n";
//     } else {
//         field.classList.remove("err");
//         error.innerHTML = "";
//     }

//     return valid;
// }



