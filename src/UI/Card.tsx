import './Card.css';
import React from 'react';

const Card = (props: any): JSX.Element => {
    return <div className='mainClass'>{props.children}</div>;
};
export default Card;