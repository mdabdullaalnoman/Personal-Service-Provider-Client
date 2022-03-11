// import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToUnderReview } from '../../Redux/Action/serviceAction';

const UpcomingService = () => {
    // const [service, setService] = useState([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => setService(data))

    //         .then(err => console.log(err))
    // }, [])
    const service = useSelector( (state) => state.services.upcomingService);
    const dispatch = useDispatch();
    const {id  , title} = service;
    

    return (
        <div>
            {
                service.map(service =>
                    <div className="service p-5" key={id}>
                        <div className="upcoming-img">
                            <img src={service.image} alt={title} className="w-1/3" />
                        </div>
                        <div className="content">
                            <p>{service.title}</p>
                            <button
                            onClick={() => dispatch(addToUnderReview(service))}
                            className="bg-green-500 px-5 py-3 hover:bg-green-900 text-white font-bold rounded-2xl">Review</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UpcomingService;