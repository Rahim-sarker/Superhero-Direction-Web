import React, { useEffect } from 'react';
import { useState } from 'react';
import Doctors from '../Doctors/Doctors';
import Cart from '../Cart/Cart'
import './AddDoctor.css'

const AddDoctor = () => {
  const [doctors, setDoctors] = useState([]);
 const [cart, setToCart] = useState([]);

  useEffect( ()=>{
      fetch('./doctors.JSON')
       .then(res => res.json())
       .then(data => setDoctors(data))
  },[])

  const handleAdTodoctor = (doctor) =>{
      const newDoctor = [...cart, doctor];
      setToCart(newDoctor)
  }

    return (
        <div className="addDoctoe-container">

            <div className="doctor-container">
                {
                    doctors.map(doctor => <Doctors
                         doctor={doctor}
                         handleAdTodoctor ={handleAdTodoctor}
                         >
                        </Doctors>)
                }
            </div>


            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default AddDoctor;