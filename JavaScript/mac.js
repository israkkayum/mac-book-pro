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
    return memoryCost;
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
    return storageCost;
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
    return totalDeliveryCharge;

};

function totalCostCount(memory, storage, delivery) {
  
    // Memory Count

    const memoryCostText = extraMemoryCost(memory).innerText;
    const memoryCost = parseInt(memoryCostText);

    // storage Count

    const storageCostText = extraStorageCost(storage).innerText;
    const storageCost = parseInt(storageCostText);

    // delivery Count

    const deliveryCostText = deliveryCharge(delivery).innerText;
    const deliveryCost = parseInt(deliveryCostText);

    // Total blance

    const totalChargeValue = document.getElementById('total-charge');
    const previousChargeValue = document.getElementById('best-price').innerText;
    totalChargeValue.innerText = memoryCost + storageCost + deliveryCost + parseInt(previousChargeValue);

    // Total Price and Discount or Pomo code

    const totalPriceValue = document.getElementById('total-price');
    const previousPriceValue = totalChargeValue.innerText;
    totalPriceValue.innerText = previousPriceValue;

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
}

document.getElementById('8gb-memory').addEventListener('click', function (){

    extraMemoryCost('8gb');
    totalCostCount('8gb');

});
document.getElementById('16gb-memory').addEventListener('click', function (){

    extraMemoryCost('16gb');
    totalCostCount('16gb');

});
document.getElementById('256gb-ssd').addEventListener('click', function (){

    extraStorageCost('256gb');
    totalCostCount('256gb');

});
document.getElementById('512gb-ssd').addEventListener('click', function (){

    extraStorageCost('512gb');
    totalCostCount('512gb');

});
document.getElementById('1tb-ssd').addEventListener('click', function (){

    extraStorageCost('1tb');
    totalCostCount('1tb');

});
document.getElementById('free-delivery').addEventListener('click', function (){

    deliveryCharge('free');
    totalCostCount('free');

});
document.getElementById('premium-delivery').addEventListener('click', function (){

    deliveryCharge('premium');
    totalCostCount('premium');

});
