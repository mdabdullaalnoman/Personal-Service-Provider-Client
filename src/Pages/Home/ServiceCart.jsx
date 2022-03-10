import React from 'react';

const ServiceCart = ({ service }) => {
    console.log(service);
    return (
        <div className='sm:p-2 md:p-5 drop-shadow-2xl border-solid border-2 border-sky-500 m-2'>
            <div className="img text-center justify-center align-center">
                <img className='' src={service.imageUrl} alt={service.tittle} />
            </div>
            <h3 className='text-center pt-3 text-lime-900 text-2xl'>{service.tittle}</h3>
            <div className="video-quantity flex justify-between py-3">
                <p>{service.classes}</p>
                <p>{service.exam}</p>
            </div>
            <p className='flex justify-end'>{service.price}</p>
        </div>
    );
};

export default ServiceCart;