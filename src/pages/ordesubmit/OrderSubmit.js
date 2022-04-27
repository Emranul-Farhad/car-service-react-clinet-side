import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { ToastIcon } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Checkout from '../../customHooks/Customhoks';
import auth from '../../firebaseKey/Firekey';
import Header from '../../Shared pages/Headr/Header';




const OrderSubmit = () => {
    const navigates = useNavigate()
    const { id } = useParams()
    const [cheks] = Checkout(id)
    const [user] = useAuthState(auth)
    console.log(user);


    const ordersubmit = event => {
        event.preventDefault();
        const order = {
            userEmail: user.email,
            serviceName: cheks.name,
            serviceId: cheks._id,
            userLocation: event.target.location.value,
            userPhone: event.target.phone.value
        }
        const url = "https://tranquil-woodland-91399.herokuapp.com/orders"
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                const datas = data.insertedId
                if (datas) {
                    toast.success('proced done')
                    event.target.reset()
                }


            })
    }




    return (
        <div>
            <Header></Header>
            <div>
                <p>Place your Orders</p>
            </div>

            <div className='w-50 mx-auto'>
                <form onSubmit={ordersubmit} >
                    <input className='w-50 mb-2' type="text" value={cheks.name} readOnly placeholder='ServiceName' /> <br />
                    <input className='w-50 mb-2' type="text" value={cheks.price} placeholder='name' /> <br />
                    <input className='w-50 mb-2' type="email" value={user?.email} placeholder='email' /> <br />
                    <input className='w-50 mb-2' type="text" name='location' placeholder='locatoion' required /> <br />
                    <input className='w-50 mb-2' type="text" name='phone' placeholder='phone Number' required /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderSubmit;