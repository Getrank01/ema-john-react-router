import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    
    for(const product of cart ){
        total = total+product.price;
        shipping = shipping+product.shipping;
        
    }
    
    const tax1 = (total * 0.1).toFixed(2);
    const grand = total+shipping+tax1;
    return (
        <div className='cart'>
            <h2 className='order'>Order Summary</h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price :  ${total}</p>
            <p>Total Shipping : ${shipping}</p> 
            <p>Tax : ${tax1}</p>
            <h3>Grand Total : ${grand}</h3>
        </div>
    );
};

export default Cart;