export let cart=JSON.parse(localStorage.getItem("cart"))||[];

export function addToCart(product){
    let matchingItem;
    const productQuantity=Number(document.querySelector(`.product-quantity-${product.productId}`).value);
    cart.forEach((item)=>{
        if(item.productId===product.productId){
            matchingItem=item;
        }});
        if(matchingItem){
            matchingItem.quantity+=productQuantity;
        }
        else
        {
            cart.push({
                productId:product.productId,
                quantity:productQuantity,
                deliveryOptionId:'1'
            })
        }
        refreshCart();
        totalItemsQuantity();
    }
export function removeFromCart(id){
    cart=cart.filter((product)=>{
        if(product.productId === id)
            return false;
        else
        return true;
    });
    refreshCart();
    totalItemsQuantity();
}
function refreshCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}
export function totalItemsQuantity(){
    let totalItems=0;
    cart.forEach((item)=>{
        totalItems+=item.quantity;
    });
    return totalItems;
}
export function updateDeliveryDate(productId,newDate){
    let matchingItem;
    cart.forEach((item)=>{
        if(item.productId===productId){
            matchingItem=item;
        }});
    matchingItem.deliveryOptionId=newDate;
    refreshCart();
}