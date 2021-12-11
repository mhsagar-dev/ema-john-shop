import React from 'react';
import Rating from 'react-rating';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 style={{ color: 'blue', fontWeight: '400' }}>{name}</h4>
                <p> <small>by : {seller} </small></p>
                <p>Price : {price}</p>
                <p><small>Only {stock} left in stock</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly>
                </Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-reg'>add to cart</button>
            </div>

        </div>
    );
};

export default Product;