import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

import MyInfo from '../Pages/Shared/MyInfo/MyInfo';

const Main = () => {
    return (
        <div>
            <MyInfo/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;