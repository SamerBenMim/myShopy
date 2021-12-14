import React from 'react'
import style from "./ProductTitle.module.css"
const ProductTitle = ({text}) => {
    return (
        <div className={style.container}>
            {text}
        </div>
    )
}

export default ProductTitle
