function getTextElementValueById(elementId) {
    const amountTotalElement = document.getElementById(elementId);
    const amountTotalElementString = amountTotalElement.innerText;
    const amountTotal = parseInt(amountTotalElementString);
    return amountTotal;
}

function setTextElementValueById(totalElementId, currentTotalValue){
    const subTotalElement = document.getElementById(totalElementId);
    subTotalElement.innerText = currentTotalValue;
}

function caculateSubtotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    // Calculate Subtotal 
    setTextElementValueById('sub-total',currentSubTotal);

    // Calculate Tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total',taxAmount);

    // Calculate Final Total 
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount)


}