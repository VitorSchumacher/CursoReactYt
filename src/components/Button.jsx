import React from 'react';
import "./Button.css"

const Button = ({children , onClik}) => {
    return ( 
        <button onClick={onClik} className="add-button">{children}</button>
     );
}
 
export default Button;