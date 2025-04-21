class Cart{
    constructor(saveName){
        this.cartLocalStorage=saveName;
    }
    cartLocalStorage;
    cartItems=JSON.parse(localStorage.getItem(cartLocalStorage))||[];
    addToCart(product){
        let matchingItem;
        const productQuantity=Number(document.querySelector(`.product-quantity-${product.productId}`).value);
        this.cartItems.forEach((item)=>{
            if(item.productId===product.productId){
                matchingItem=item;
            }});
            if(matchingItem){
                matchingItem.quantity+=productQuantity;
            }
            else
            {
                this.cartItems.push({
                    productId:product.productId,
                    quantity:productQuantity,
                    deliveryOptionId:'1'
                })
            }
            refreshCart();
            totalItemsQuantity();
        }
            removeFromCart(id){
            this.cartItemst=this.cartItems.filter((product)=>{
                if(product.productId === id)
                    return false;
                else
                return true;
            });
            refreshCart();
            totalItemsQuantity();
        }
        refreshCart(){
            localStorage.setItem(cartLocalStorage,JSON.stringify(this.cartItems));
        }
        totalItemsQuantity(){
            let totalItems=0;
            this.cartItems.forEach((item)=>{
                totalItems+=item.quantity;
            });
            return totalItems;
        }
        updateDeliveryDate(productId,newDate){
            let matchingItem;
            this.cartItems.forEach((item)=>{
                if(item.productId===productId){
                    matchingItem=item;
                }});
            matchingItem.deliveryOptionId=newDate;
            refreshCart();
        }

}





