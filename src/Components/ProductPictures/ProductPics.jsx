import React, { useState } from 'react'
import style from "./ProductPics.module.css"
import Info from './Info/Info'
const ProductPics = ({src}) => {

    return (
        <div 
        className={style.container}>
            <img src={src} alt="" />
            <Info></Info>
        </div>
    )
}

export default ProductPics
