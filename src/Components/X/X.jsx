import React,{useState} from 'react'
import "./X.css"
const X = () => {
    const [state, setstate] = useState("")
    return (
        <div className='X' onClick={()=>{(!state)?setstate("open"):setstate("")}}>
            <div className={`menu-btn ${state}`} >
            <div className="middle-menu-btn"></div>
            </div> 
        </div>
    )
}

export default X
