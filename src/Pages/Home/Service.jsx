import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return (
        <div>
            <h1 className='text-center text-orangeDip text-2xl font-bold py-3'>My Service</h1>

            <div className="flex justify-between sm:px-2 md:px-5 sm:flex-col md:flex-row ">
                {
                    service?.map(service => <ServiceCart service={service} key={service._id}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;