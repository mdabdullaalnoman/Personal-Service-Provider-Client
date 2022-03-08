import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';

const PostService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        reset();
        console.log(data)
    };
    console.log(errors);


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