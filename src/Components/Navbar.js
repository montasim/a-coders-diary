import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabindex='0' className='btn btn-ghost lg:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                    </label>
                    <ul tabindex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                        <li><a>Item 1</a></li>
                        <li tabindex='0'>
                            <a className='justify-between'>
                                Parent
                                <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>
                            </a>
                            <ul className='p-2'>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className='btn btn-ghost normal-case text-xl'>
                    <h3 className='text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>A Coders Diary</h3>
                </a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal p-0'>
                    <li><a>Item 1</a></li>
                    <li tabindex='0'>
                        <a>
                            Parent
                            <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
                        </a>
                        <ul className='p-2'>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className='navbar-end'>
                <a className='btn'>Get started</a>
            </div>
        </div>
    );
};

export default Navbar;