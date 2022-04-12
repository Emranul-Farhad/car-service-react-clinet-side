import React from 'react';
import car from '../../../Images/carwash2.png'

const UnHeader = () => {
    return (
        <div className='container unHeader'>
            <div className=" d-flex">
                <div className="washText">
                    <span className='red'>__Modern Equipment</span>
                    <h2 className='carwashText'>Professional washing <br /> and cleaning of your car</h2>
                    <p className='carWashText'>Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam lobortis est.</p>
                    <h2 className='bookNow'> Call For Book: <span className='red'>0180-00-0</span></h2>
                </div>
                <div className="imagecar">
                    <img className='d-sm-none d-md-block d-xxl-block d-xxl-block' src={car} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UnHeader;