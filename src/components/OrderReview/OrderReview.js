import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';


const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder')
        setCart([]);
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product =><ReviewItem 
                        key={product.key} 
                        product={product}
                        handleRemove={handleRemove}
                        >
                        
                        </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart className="cart-container" cart={cart}>
                        <button onClick={handlePlaceOrder} className='btn-reg'>Place Order</button>
                </Cart>
            </div>
        </div>
    )
};

export default OrderReview;