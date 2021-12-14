import React, { useEffect, useState } from 'react'
import style from "./SideBar.module.css"
import "./SideBar.css"

const SideBar = () => {
    const [display, setdisplay] = useState(true)
    useEffect(()=> {
    if (window.innerWidth<700){
        setdisplay(false)
    }
    }, [window.innerWidth])

    return (
        <div className={`${style.container} ${!display ? "nodisplay" : ""}`}>
            
        </div>
    )
}

export default SideBar
