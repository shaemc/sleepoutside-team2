import { getLocalStorage } from "./utils";
export default class CheckoutProcess{
    constructor(){}
    getSubtotal(){
    const contents = getLocalStorage("so-cart");
    const pricesArray = contents.map(item=>item.FinalPrice);
    const subTotal = pricesArray.reduce((acc, curr)=>acc + curr);
    return subTotal;
    };

    displayStuff(){
    const subTotal = this.getSubtotal();
    document.getElementById("subTotal").innerHTML = `Subtotal: $${subTotal.toFixed(2)}`

    const tax = this.getSubtotal() * .06;
    document.getElementById("tax").innerHTML = `Tax: $${tax.toFixed(2)}`
    const contentLength = getLocalStorage("so-cart").length;
    const shipping = (contentLength - 1) * 2 + 10;
    document.getElementById("ship").innerHTML = `Shipping Estimate: $${shipping.toFixed(2)}`

    const finalTotal = (this.getSubtotal() + tax + shipping).toFixed(2);
    document.getElementById("orderTotal").innerHTML = `Order total: $${finalTotal}`

    };
}

