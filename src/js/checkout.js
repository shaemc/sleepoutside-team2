import {loadHeaderFooter} from "./utils.js";
import CheckoutProcess from "./CheckoutProcess.js";
loadHeaderFooter();

const checkOut = new CheckoutProcess;
function checkoutTotal(){
    checkOut.getSubtotal();
}
function calcShipping(){
    checkOut.displayStuff();
}

window.addEventListener("load", checkoutTotal);

document.querySelector("#zipcode").addEventListener("blur", calcShipping);