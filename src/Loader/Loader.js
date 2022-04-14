import React from 'react';
import {Triangle } from 'react-loader-spinner';

const Loader = () => {

    return (
        <div>
         <div className='d-flex justify-content-center mt-5'>
         <Triangle
                height="400"
                width="250"
                color='red'
                ariaLabel='loading'
            />
         </div>
        </div>
    );
};

export default Loader;