import React from 'react';
import { RiUserShared2Fill } from 'react-icons/ri';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    const navbarMenu = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className='navbar bg-base-100'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabindex='0' className='btn btn-ghost lg:hidden'>
                        <TiThMenu className='text-2xl' />
                    </label>
                    <ul tabindex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                        {
                            navbarMenu
                        }
                    </ul>
                </div>
                <a className='btn btn-ghost normal-case text-xl'>
                    <h3 className='lg:text-2xl sm:text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>A Coders Diary</h3>
                </a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal p-0'>
                    {
                        navbarMenu
                    }
                </ul>
            </div>
            <div className='navbar-end'>
                <a className='btn btn-outline'><RiUserShared2Fill className='lg:text-lg sm:text-sm' /></a>
            </div>
        </div>
    );
};

export default Navbar;