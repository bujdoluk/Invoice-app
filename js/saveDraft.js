'use strict';

let invoice = new Object();

function saveDraft() {
    let drafts = [];

    if (!drafts == "") {
        document.getElementById('empty').style.display = 'none';
    }

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

    drafts.push(invoice);
    console.log(drafts)
}



