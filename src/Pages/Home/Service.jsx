import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://fierce-thicket-41993.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return (
        <div>
            <h1 className='text-center text-orangeDip text-2xl font-bold py-3'>My Service</h1>
            {
                service?.length
                    ?
                    <div className="flex justify-between sm:px-2 md:px-5 sm:flex-col md:flex-row ">
                        {
                            service?.map(service => <ServiceCart service={service} key={service._id}></ServiceCart>)
                        }
                    </div>
                    :
                    <div className="text-center p-10">
                        <span class="flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            loading.....
                        </span>
                    </div>
            }
        </div>
    );
};

export default Service;