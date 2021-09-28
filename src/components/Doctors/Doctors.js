import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'

const Doctors = (props) => {
    // console.log(props)

    const {name , img, fees, specialist, email} = props.doctor;
    const element = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className ="card-container">
            <div className="card-view">
                <img src={img} alt="" />
                <div className="doctor-info">
                    <h2>Name:{name} </h2>
                    <h2>{specialist}</h2>
                    <h3>consultation fee: {fees}</h3>
                    <h3>Email: {email}</h3>
                </div>
                    <button
                    onClick={()=> props.handleAdTodoctor(props.doctor)}
                     className="doctor-btn"
                     >{element}add doctor</button>

            <div className ="card-icon">
                <i class="fab fa-facebook-square fa-2x"></i>
                <i class="fab fa-twitter-square fa-2x"></i>
            </div>
        </div>
            
        </div>
    );
};

export default Doctors;