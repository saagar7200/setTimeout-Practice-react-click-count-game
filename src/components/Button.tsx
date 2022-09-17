import React, { FC } from 'react'
import "./style.css"

interface Props {
    text:string,
    clickHandler:()=>void,
    disabled?:boolean
    
}

const Button:FC<Props> = ({text,clickHandler,disabled}) => {
    return (
        <div className='button'>
            <button className='button' onClick={clickHandler} disabled={disabled}>{text}</button>
            
        </div>
    )
}

export default Button