import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {handleCart, product} = props;
    const {img,name,seller,price,ratings} = product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                 <p className='product-name'> {name}</p>
                 <p>Seller : {seller}</p>
                 <p>Price : ${price}</p>
                 <p>Ratings : {ratings}</p>
            </div>

            <button onClick={()=>handleCart(product)}  className='btn-cart'>
                 <p>Add To Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
           
        </div>
    );
};

export default Product;