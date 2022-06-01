import './Button.css';
import React from 'react';

const Button = (props: any): JSX.Element => {

    return (
        <button type={props.type} className="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;