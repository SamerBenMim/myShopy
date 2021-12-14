import React from 'react'
import style from "./SectionButton.module.css"
const SectionButton = ({text}) => {
    return (
        <div className={style.container}>
            {text}
        </div>
    )
}

export default SectionButton
