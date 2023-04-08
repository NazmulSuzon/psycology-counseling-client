import React from 'react';
import img1 from '../../../images/social-icon/facebook.png';
import img2 from '../../../images/social-icon/linkedin.png';
import img3 from '../../../images/social-icon/github.png';
import { Link } from 'react-router-dom';

const MyInfo = () => {
    return (
        <div>
            <div className='flex justify-around py-4'>
                <h1 className="text-xl font-bold text-primary">Nazmul Suzon</h1>
                <p className='font-bold text-neutral'>You can message me in my social id</p>
                <div className='flex'>
                <Link to="https://www.facebook.com/nazmul.suzon.79/" target="_blank"><img style={{width:'24px'}} src={img1} alt="" /></Link>
                <Link  to="https://github.com/NazmulSuzon" target="_blank"><img className='mx-3' style={{width:'24px'}} src={img2} alt="" /></Link>
                <Link to="https://www.linkedin.com/in/nazmul-hasan96/" target="_blank"><img style={{width:'24px'}} src={img3} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;