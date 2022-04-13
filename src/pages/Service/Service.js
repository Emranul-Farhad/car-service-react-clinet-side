import React, { useEffect, useState } from 'react';
import Header from '../../Shared pages/Headr/Header';
import Services from '../Services/Services';
import './service.css'

const Service = () => {

const [services , setSerives] = useState([])
 
useEffect( () => {
        fetch("service.json")
        .then(res => res.json())
        .then( data => setSerives(data))
    }, [] )


    return (
        <div>
            <Header></Header>
            <div className='serviceRow'>  
            {
                services.map( service => <Services service={service} key={service.id} ></Services> )
            }
            </div>
        </div>
    );
};

export default Service;