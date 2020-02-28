import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className='nav-main'>

                <div className='title'>
                    GYMATE
                </div>
                <div className='spacer'></div>
                <div className='nav-items'>
                    <ul>
                        <li><Link className='nav-item' to='/'>HOME</Link></li>

                         <li><Link className='nav-item' to='/' onClick={props.logout}>LOGOUT</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
