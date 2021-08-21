// Function for Extra Memory Cost

function extraMemoryCost(power) {
    const memoryCost = document.getElementById('extra-memory-cost');
    const memory8gbButton = document.getElementById('8gb-memory');
    const memory16gbButton = document.getElementById('16gb-memory');

    if (power == '8gb') {
        memoryCost.innerText = 0;
        memory8gbButton.style.backgroundColor = 'red';
        memory8gbButton.style.color = 'white';
        memory16gbButton.style.backgroundColor = '';
        memory16gbButton.style.color = '';
    }
    else if (power == '16gb') {
        memoryCost.innerText = 180;
        memory16gbButton.style.backgroundColor = 'red';
        memory16gbButton.style.color = 'white';
        memory8gbButton.style.backgroundColor = '';
        memory8gbButton.style.color = '';
    }
    totalChargeValue.innerText = parseInt(memoryCost.innerText) + parseInt(previousChargeValue);
    totalPriceValue.innerText = totalChargeValue.innerText;
};

// Function for Extra Storage Cost

function extraStorageCost(power) {
    const storageCost = document.getElementById('extra-storage-cost');
    const storage256gbButton = document.getElementById('256gb-ssd');
    const storage512gbButton = document.getElementById('512gb-ssd');
    const storage1tbButton = document.getElementById('1tb-ssd');
    
    if (power == '256gb') {
        storageCost.innerText = 0;
        storage256gbButton.style.backgroundColor = 'red';
        storage256gbButton.style.color = 'white';
        storage512gbButton.style.backgroundColor = '';
        storage512gbButton.style.color = '';
        storage1tbButton.style.backgroundColor = '';
        storage1tbButton.style.color = '';
    }
    else if (power == '512gb') {
        storageCost.innerText = 100;
        storage512gbButton.style.backgroundColor = 'red';
        storage512gbButton.style.color = 'white';
        storage256gbButton.style.backgroundColor = '';
        storage256gbButton.style.color = '';
        storage1tbButton.style.backgroundColor = '';
        storage1tbButton.style.color = '';
    }
    else if (power == '1tb') {
        storageCost.innerText = 180;
        storage1tbButton.style.backgroundColor = 'red';
        storage1tbButton.style.color = 'white';
        storage512gbButton.style.backgroundColor = '';
        storage512gbButton.style.color = '';
        storage256gbButton.style.backgroundColor = '';
        storage256gbButton.style.color = '';
    }
    totalChargeValue.innerText = parseInt(storageCost.innerText) + parseInt(previousChargeValue);
    totalPriceValue.innerText = totalChargeValue.innerText;
};

// Function for delivery Charge

function deliveryCharge(charge) {
    const totalDeliveryCharge = document.getElementById('total-delivery-charge');
    const freeChargeButton = document.getElementById('free-delivery');
    const premiumChargeButton = document.getElementById('premium-delivery');

    if (charge == 'free') {
        totalDeliveryCharge.innerText = 0;
        freeChargeButton.style.backgroundColor = 'red';
        freeChargeButton.style.color = 'white';
        premiumChargeButton.style.backgroundColor = '';
        premiumChargeButton.style.color = '';
    }
    else if (charge == 'premium') {
        totalDeliveryCharge.innerText = 20;
        freeChargeButton.style.backgroundColor = '';
        freeChargeButton.style.color = '';
        premiumChargeButton.style.backgroundColor = 'red';
        premiumChargeButton.style.color = 'white';
    }
    totalChargeValue.innerText = parseInt(totalDeliveryCharge.innerText) + parseInt(previousChargeValue);
    totalPriceValue.innerText = totalChargeValue.innerText;
};

document.getElementById('8gb-memory').addEventListener('click', function (){

    extraMemoryCost('8gb');

});
document.getElementById('16gb-memory').addEventListener('click', function (){

    extraMemoryCost('16gb');

});
document.getElementById('256gb-ssd').addEventListener('click', function (){

    extraStorageCost('256gb');

});
document.getElementById('512gb-ssd').addEventListener('click', function (){

    extraStorageCost('512gb');

});
document.getElementById('1tb-ssd').addEventListener('click', function (){

    extraStorageCost('1tb');

});
document.getElementById('free-delivery').addEventListener('click', function (){

    deliveryCharge('free');

});
document.getElementById('premium-delivery').addEventListener('click', function (){

    deliveryCharge('premium');

});

const totalChargeValue = document.getElementById('total-charge');
const previousChargeValue = totalChargeValue.innerText;
const totalPriceValue = document.getElementById('total-price');
const previousPriceValue = totalPriceValue.innerText;

document.getElementById('pomo-code-button').addEventListener('click', function () {
const pomoCodeInput = document.getElementById('pomo-code-input');

if (pomoCodeInput.value == 'stevekaku') {
    totalPriceValue.innerText = parseInt(previousPriceValue) - (parseFloat((previousPriceValue*20)/100));
    pomoCodeInput.value = '';
}
else{
    pomoCodeInput.value = '';
}
});

