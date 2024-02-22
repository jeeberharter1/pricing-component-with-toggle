const priceSwitch = document.getElementById('price-switch');
let basicPrice = document.querySelector('.basic__price');
let professionalPrice = document.querySelector('.professional__price');
let masterPrice = document.querySelector('.master__price');

function convertPrices() {
    if (!priceSwitch.checked) {
        changePricesToAnnually();
    } else {
        changePricesToMonthly();
    }
}

function changePricesToAnnually() {
    basicPrice.innerHTML = 199.99;
    professionalPrice.innerHTML = 249.99;
    masterPrice.innerHTML = 399.99;
}

function changePricesToMonthly() {
    basicPrice.innerHTML = 19.99;
    professionalPrice.innerHTML = 24.99;
    masterPrice.innerHTML = 39.99;
}

priceSwitch.addEventListener("change", convertPrices);