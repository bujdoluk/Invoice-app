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

let itemList1 = {
    itemName: 'Lego',
    qty: 1,
    price: 156,
    total: 156,
}

const invoice1 = {
    id: generateID(),
    address: 'Pri Hornade 380',
    city: 'Kosice',
    postCode: 24415,
    country: 'Slovakia',

    clientName: 'Lukas',
    clientEmail: 'lukas.bujdos@gmail.com',
    clientAddress: 'Uzhorodska 18',
    clientCity: 'Kosice',
    clientPostCode: 24415,
    clientCountry: 'Czech',
    InvoiceDate: '27.4.2018',
    paymentTerms: 'Net 1 day',
    projectDescription: 'Programmer',
    itemLists: [itemList1],
};

const invoice2 = {
    id: generateID(),
    address: 'Pri Hornade 380',
    city: 'Kosice',
    postCode: 24415,
    country: 'Slovakia',

    clientName: 'Lukas',
    clientEmail: 'lukas.bujdos@gmail.com',
    clientAddress: 'Uzhorodska 18',
    clientCity: 'Kosice',
    clientPostCode: 24415,
    clientCountry: 'Czech',
    InvoiceDate: '27.4.2018',
    paymentTerms: 'Net 1 day',
    projectDescription: 'Programmer',
    itemLists: [itemList1],
};

const invoice3 = {
    id: generateID(),
    address: 'Pri Hornade 380',
    city: 'Kosice',
    postCode: 24415,
    country: 'Slovakia',

    clientName: 'Lukas',
    clientEmail: 'lukas.bujdos@gmail.com',
    clientAddress: 'Uzhorodska 18',
    clientCity: 'Kosice',
    clientPostCode: 24415,
    clientCountry: 'Czech',
    InvoiceDate: '27.4.2018',
    paymentTerms: 'Net 1 day',
    projectDescription: 'Programmer',
    itemLists: [itemList1],
};

const invoice4 = {
    id: generateID(),
    address: 'Pri Hornade 380',
    city: 'Kosice',
    postCode: 24415,
    country: 'Slovakia',

    clientName: 'Lukas',
    clientEmail: 'lukas.bujdos@gmail.com',
    clientAddress: 'Uzhorodska 18',
    clientCity: 'Kosice',
    clientPostCode: 24415,
    clientCountry: 'Czech',
    InvoiceDate: '27.4.2018',
    paymentTerms: 'Net 1 day',
    projectDescription: 'Programmer',
    itemLists: [itemList1],
};

const invoicesArray = [invoice1, invoice2, invoice3, invoice4];

const browseBtn = document.querySelector('#browse');

browseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#createAccount').style.display = 'none';
    document.querySelector('#body-view').style.display = 'none';
    document.querySelector('.sidepanel').style.display = 'flex';
    document.querySelector('#main-view ').style.display = 'flex';
});

function renderInvoice() {
    const invoicesArray = document.getElementById('invoices-array');
    const div = document.createElement("div");

    div.innerHTML =

        `<a class="invoices-link" href="/invoice.html">
            <div class="invoices-element">
                    <div>${generateID()}</div>
                    <div class="grey">${invoice.invoiceDate}</div>
                    <div class="grey">${invoice.clientName}</div>
                    <div class="bold">120</div>
                    <div class="right">
                    <div class="status-value-udpate-draft"><span class="status-dot-draft">&#11044;</span> Draft</div>
                    <div><img class="arrow-right" src="/assets/icon-arrow-right.svg" alt="Arrow right"></div>
                    </div>
            </div>
        </a>`;

    invoicesArray.append(div);
    console.log(localStorage.setItem("invoice", div));
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

function discard() {
    document.getElementById('new').style.display = 'none';
}

function generateID() {
    const symbol = "#";
    const numbers = Math.floor((Math.random() * 8999) + 1000);
    const letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();

    const id = symbol + letters + numbers;

    return id;
}




