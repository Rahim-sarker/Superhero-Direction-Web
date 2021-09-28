import React from 'react';
import './Cart.css'


const cart = (props) => {
   const {cart} = props; 
let total = 0;
for(const doctor of cart){
    total = total + doctor.fees;
    
}

    return (
        <div className ='card-element'>
            <h2><i class="fas fa-user fa-lg"></i>Doctor Added: {props.cart.length}</h2>
            <h2>Total Fees: ${total}</h2>
        
        </div>
    );
};

export default cart;