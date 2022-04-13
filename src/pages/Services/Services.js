import React from 'react';

const Services = (props) => {
    const {name, price , id, img , description} = props.service

    return (
        <div >
            
               <div className="container">
                            <div className="wsk-cp-product">
                                <div className="wsk-cp-img">
                                    <img src={img} alt="Product" className="img-responsive" />
                                </div>
                                <div className="wsk-cp-text">
                                    <div className="category">
                                        <span> {price} </span>
                                    </div>
                                    <div className="title-product">
                                        <h3>Tire car wheel </h3>
                                    </div>
                                    <div className="description-prod">
                                        <p> {description} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Services;