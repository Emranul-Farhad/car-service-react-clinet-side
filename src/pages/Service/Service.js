import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseKey/Firekey';
import Loader from '../../Loader/Loader';
import Header from '../../Shared pages/Headr/Header';
import Services from '../Services/Services';
import './service.css'

const Service = () => {
const [loading] = useAuthState(auth)
const [services , setSerives] = useState([])
 
useEffect( () => {
        fetch("http://localhost:8000/services")
        .then(res => res.json())
        .then( data => setSerives(data))
    }, [] )

if(loading){
    <Loader></Loader>
}

    return (
        <div>
            <Header></Header>
            <div className='serviceRow'>  

            {
                services.map( service => <Services service={service} key={service._id} ></Services> )
            }

            </div>

        </div>
    );
};

export default Service;