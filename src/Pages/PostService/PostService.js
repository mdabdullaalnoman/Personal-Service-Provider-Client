import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';

const PostService = () => {
    const { register, handleSubmit, reset } = useForm();

    // submit data -----------------------------
    const onSubmit = data => {

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('service added success fully')
                }
                else{
                    alert('some things went wrong')
                }
            })
   
       
        

        reset();
        console.log(data)
    };

    useEffect(() => {
        console.log('noman');
      });

    return (
        <div>
            <Nav />
            <div className="post-warp ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center border-b-2 border-indigo-500 py-5">

                    <input className="border-b-2 border-indigo-500 py-3" type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} />

                    <input className="border-b-2 border-indigo-500 py-3" type="text" placeholder="Tittle" {...register("tittle", { required: true })} />

                    <input className="border-b-2 border-indigo-500 py-3" type="number" placeholder="Classes Quantity" {...register("classes", { min: 0, max: 99 })} />

                    <input className="border-b-2 border-indigo-500 py-3" type="number" placeholder="Exam Quantity" {...register("exam")} />

                    <input className="border-b-2 border-indigo-500 py-3" type="number" placeholder="Price" {...register("price")} />


                    <input className="border-b-2 border-indigo-500 py-3" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default PostService;