import React from 'react';
//import '../App.css';

export const Expenses = props => {
    return (
    <div>
        <h2>Expenses Total</h2>
        <span>{props.total}</span>
    </div>);
}