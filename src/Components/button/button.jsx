import React from 'react'
import Btn from "./button.module.css"
const Button = () => {
    return (
        <div className={Btn.bouton}>
            <a className={Btn.btn} 
            href="#"
            title="SHOP ALL" >
            SHOP ALL
            </a>
        </div>
    )
}

export default Button
