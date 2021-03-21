import React from 'react';
//import '../App.css';

export const Budget = props => {
    return (
    <div>
        <h2>Budget Total</h2>
        <span>{props.total}</span>
    </div>);
}