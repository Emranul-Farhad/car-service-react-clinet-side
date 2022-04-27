import React from 'react';
import Header from '../../Shared pages/Headr/Header';
import { useForm } from "react-hook-form";



const SerDetials = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = "https://tranquil-woodland-91399.herokuapp.com/services"
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    }



    return (
        <div>
            <Header></Header>
            <div>
                <p>submit form</p>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='service name' {...register("name")} />
                        <input placeholder='service description' {...register("description")} />
                        <input placeholder='service price' {...register("price")} />
                        <input placeholder='service img url' type="text" {...register("img")} />
                        <input placeholder='' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SerDetials;