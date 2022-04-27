import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseKey/Firekey';
import Header from '../../../Shared pages/Headr/Header';



const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigates = useNavigate()




    // useEffect(() => {

    //     const email = user?.email
    //     const url = `https://tranquil-woodland-91399.herokuapp.com/orders?email=${email}`
    //      console.log(url);
    //      fetch(url, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("access token")}`,
    //           },
    //      })
    //      .then(res => res.json())
    //      .then(data => setOrders(data))

    // }, [user])


    // useEffect(() => {
    //     const email = user?.email
    //     const url = `https://tranquil-woodland-91399.herokuapp.com/orders?email=${email}`
    //     try{
    //         fetch(url,{
    //             headers:{
    //                 authorization : `Bearer ${localStorage.getItem('access token')}`
    //             }
    //         })
    //         .then(res=> res.json())
    //         .then(data=> setOrders(data));
    //     }

    //     catch(error){
    //         console.log(error.message,' fjfjfgh')
    //     }

    // },[user])


    useEffect(() => {
        const orders = async () => {
            const email = user?.email
            const url = `https://tranquil-woodland-91399.herokuapp.com/orders?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access token')}`
                    }
                });
                setOrders(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    navigates('/login')
                    signOut(auth)
                }
                console.log(error);
            }
        }
        orders()
    }, [user])





    return (
        <div>
            <Header></Header>
            <div>
                <p> {orders.length} </p>
            </div>
        </div>
    );
};

export default Orders;