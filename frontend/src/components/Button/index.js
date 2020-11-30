import React from 'react';
import './style.css';

const Button = (props) => (
        <button onClick={props.handleClick} className={props.className} index={props.index}>
            {props.text} 
        </button>
)

export default Button;