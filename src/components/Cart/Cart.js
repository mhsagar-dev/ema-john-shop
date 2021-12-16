import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;


    let total = 0;
    for (const product of cart) {
    if(!product.quantity){
        product.quantity = 1;
    }
      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Orderd Summary</h2>
            <h5>Items Orderd : {totalQuantity} </h5>
            <p>Total : ${total.toFixed(2)}</p>
            <p>shipping : ${shipping}</p>
            <p>tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;