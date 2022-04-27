import { checkActionCode } from 'firebase/auth';
import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Checkout from '../../customHooks/Customhoks';
import Header from '../../Shared pages/Headr/Header';

const Chekout = () => {
    const navigates = useNavigate()
    const {id} = useParams()
    const [cheks] = Checkout(id)
 



return (
        <div>
            <Header></Header>
            <div>
                <p> {cheks.name} </p>
            </div>
            <button onClick={()=> navigates(`/ordersubmit/${cheks._id}`) } > checkout </button>
        </div>
    );
};

export default Chekout;