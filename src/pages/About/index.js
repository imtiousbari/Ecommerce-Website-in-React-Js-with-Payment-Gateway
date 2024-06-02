import React from 'react';
// import 'Maintanence' from ''
import Maintanence from '../../assets/images/Maintanence.svg';
import './style.css';

const About=()=>{
    return(
        <div className='container-fluid'>
             <img src={Maintanence} className='w-100' />
            </div>
    )
}

export default About;