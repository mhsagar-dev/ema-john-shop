import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, stock, seller } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 style={{color: 'blue', fontWeight: '400'}}>{name}</h4>
                <p> <small>by : {seller} </small></p>
                <p>Price : {price}</p>
                <p><small>Only {stock} left in stock</small></p>
                <button onClick={ () => props.handleAddToCart(props.product)} className='btn-reg'>add to cart</button>
            </div>

        </div>
    );
};

export default Product;