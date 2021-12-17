import React from 'react'
import Welcome from './wlc.module.css' 
import Button from '../button/button'
const Wlc = () => {
    return (
        <div className={Welcome.bg}>
            <div className={Welcome.nav}>
                <h2 className={Welcome.logo}>LOGO</h2>
                <div className={Welcome.sections}>
                    <div className={Welcome.section}> Men</div>
                    <div className={Welcome.section}> Women</div>
                    <div className={Welcome.section}> Kids</div>
                </div>
            </div>
            <h1> ipsum cupidatat <br/> excepteur deserunt cons.</h1>
            <Button/>
        </div>
    )
}

export default Wlc
