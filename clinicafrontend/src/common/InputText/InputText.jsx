import React from 'react';
import "./inputText.css"

export const InputText = ({type, className, placeholder, name, handler}) => {

    return (
        <div >
            <input id='inputTextDesign'
                type={type}
                className={className} 
                placeholder={type}
                name={name}
                onChange={(e)=>handler(e)}
            />
        </div>
    )
}