import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reviewed from './Pages/Dashboard/Reviewed';
import UnderReview from './Pages/Dashboard/UnderReview';
import UpcomingService from './Pages/Dashboard/UpcomingService';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PostService from './Pages/PostService/PostService';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="postService" element={<PostService />} />
        <Route path="about" element={<AboutUs />} />

        <Route path="dashboard" element={<Dashboard />} >
          <Route path="upcomingService" element={<UpcomingService />} />
          <Route path="underReview" element={<UnderReview />} />
          <Route path="Reviewed" element={<Reviewed />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;