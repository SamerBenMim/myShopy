import React from 'react'
import style from "./Info.module.css"



const Info = ({hover}) => {
    return (
        <div className={`${style.container} ${hover ? style.hover : ""}`}>

            
        </div>
    )
}

export default Info
