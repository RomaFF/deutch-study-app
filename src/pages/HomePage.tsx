import React from 'react';
import {Outlet} from "react-router-dom";

function HomePage() {
    return (
        <div className='main_wrapper'>
            <Outlet />
        </div>
    )
}

export default HomePage;
