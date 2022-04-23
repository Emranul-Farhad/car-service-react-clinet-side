import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Serivces.css'

const Services = (props) => {
    const { name, price,  _id, img, description } = props.service

    const navigates = useNavigate()

    // const ser = _id => {
    //     navigates(`/service-details/${_id}`)
    //     navigates('/service-details')
    // }

    return (
        <div>
            <div className="container servicesD">
                <div class="collection">
                    <img src={img} alt="" />
                    <h3 className='serviceTExt'>{name}</h3>
                    <p className='servicePrice'> ${price} </p>
                    <div >
                        <p class="collecting-details">
                            {description}
                        </p>
                    </div>
                    {/* <div className='servieBUTTON'>
                    <a class="blog-btn" href="#"> Book Now  </a>
                    </div> */}
                </div>
                <div className='servieBUTTON'>                   
                    <button onClick={()=> navigates(`/service-details/${_id}`) } className='blog-btn' >Details </button>
                </div>
            </div>
        </div>
    );
};

export default Services;