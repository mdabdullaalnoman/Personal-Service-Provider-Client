import React from 'react';
import { useSelector } from 'react-redux';

const UnderReview = () => {
    const service = useSelector((state) => state.services.underReview);
    // const dispatch = useDispatch();
    const { id, title } = service;

    return (
        <div>
            {
                service.length === 0 && <p>Any service dont added right now</p>
            }
            {
                service.map(service =>
                    <div className="service p-5" key={id}>
                        <div className="upcoming-img">
                            <img src={service.image} alt={title} className="w-1/3" />
                        </div>
                        <div className="content">
                            <p>{service.title}</p>
                            <button
                                className="bg-green-500 px-5 py-3 hover:bg-green-900 text-white font-bold rounded-2xl">Remove</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UnderReview;