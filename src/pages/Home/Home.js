import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import image from '../../Images/banner-img.png'
import Header from '../../Shared pages/Headr/Header';
import Review from '../clientReview/review';
import Choose from './chooselPlane/Choose';
import "./Home.css"
import Pricing from './Pricing/Pricing';
import UnHeader from './UnderHeader/UnHeader';
import Wash from './washShow/Wash';



const Home = () => {
    return (
        <>
            <div className=' headerBg'>
                <Header></Header>
                <div className='container'> 
                <div className="row display-flex align-items-center ">
                    <div className="col-md-5 ">
                        <h1 className='headerText'>Repair Yours car <br /> Hastle Free </h1>
                        <h1 className='headerText'>CERAMIC TOP COAT  PROTECTION </h1>
                        <p className='headerTextdes' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sequi facilis, delectus voluptatem exercitationem placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil earum molestias! In, praesentium hic? </p>
                        <button className="btn buynow-btn ms-auto text-light">Buy Now</button>
                        <br />

                    </div>
                    <div className="col-md-7 headerImage">
                        <img className='w-100' src={image} alt="" />
                    </div>
                </div>
               </div>
            </div>
            <div>
                <UnHeader></UnHeader>
            </div>
            <div className='WashPart'>
                <div className='divider'>
                    <div className='divio'></div>
                    <h3> Wash <span className='red' >YOURS</span> Cars </h3>
                    <div className='divit' ></div>
                </div>
                <Wash></Wash>
            </div>
            <div className='choosePart'>
                <Choose></Choose>
            </div>
            <div className='pricingsection'>
                <Pricing></Pricing>
            </div>
            <div className='reviewsection'>
                <Review></Review>
            </div>
        </>
    );
};

export default Home;


{/* <div className='container'>
<div className="row display-flex align-items-center">
    <div className="col-md-5">
        <h1 className='headerText'>CERAMIC TOP COAT <br /> PROTECTION</h1>
    </div>
    <div className="col-md-7 headerImage">
        <img src={image} alt="" />
    </div>
</div>

</div> */}