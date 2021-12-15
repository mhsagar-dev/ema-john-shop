import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, img, key} = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""/>
           </div>
           <div>
               <h4>{name}</h4>
               <p>Price : {price}</p>
               <p>Quantity : {quantity}</p>
               <br/>
               <button onClick={ () => handleRemove(key)} className="btn-reg">Remove</button>
           </div>
    
        </div>
    );
};

export default ReviewItem;