import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart) {
      total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Orderd Summary</h2>
            <h5>Items Orderd : {props.cart.length} </h5>
            <p>Total : ${total.toFixed(2)}</p>
            <p>shipping : ${shipping}</p>
            <p>tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;