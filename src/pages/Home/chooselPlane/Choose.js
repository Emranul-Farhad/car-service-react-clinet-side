import React from 'react';

const Choose = () => {
    return (
        <div>
            <div className='container' >
                <h1>Choose Your Plan</h1>
                <p className='chootext'>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies..</p>
            </div>
            <div className='chooseplane container'>
                <div className='chooseCare'>
                    <img src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_01.png" alt="" />
                    <p>Sedeen</p>
                </div>
                <div className='chooseCare'>
                    <img src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_03.png" alt="" />
                    <p>PickUp</p>
                </div>
                <div className='chooseCare'>
                    <img src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_02.png" alt="" />
                    <p>SUV</p>
                </div>
                <div className='chooseCare'>
                    <img src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_04.png" alt="" />
                    <p>Mini Bus</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;