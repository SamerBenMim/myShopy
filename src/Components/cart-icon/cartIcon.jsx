import React from 'react'
import bag from "../../xSVG/bag.svg"
import cart from './cart-icon.module.css'
const CartIcon = () => {
    return (
        <div className={cart.wrap}>
                  <img src={bag} className={cart.bag} alt="loop" />
                  <span class={cart.item_count}>0</span>
        </div>
    )
}

export default CartIcon
