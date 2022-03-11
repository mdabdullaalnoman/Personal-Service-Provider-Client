import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';


const Dashboard = () => {
    const service = useSelector((state) => state.services.underReview);
    return (
        <div>
            <Nav />
            <div className="dashboard grid grid-cols-2 gap-4 p-5">
                <div className="sidebar flex flex-col">
                    <Link to="/dashboard/upcomingService">Upcoming Service</Link>
                    <Link to="/dashboard/underReview">Under Review <span className='text-2xl'>{service.length}</span></Link>
                    <Link to="/dashboard/reviewed">Reviewed</Link>
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;