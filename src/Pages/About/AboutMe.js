import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <aside className='relative overflow-hidden text-gray-300 bg-gray-900 lg:flex'>
            <div className='w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left'>
                <div className='max-w-xl mx-auto lg:ml-0'>
                    <p className='text-sm font-medium'>Learn more about the developer.</p>

                    <p className='mt-2 text-2xl font-bold text-white sm:text-3xl'>
                        Hi, I am Montasim. A full stack web developer.
                    </p>

                    <p className='hidden lg:mt-4 lg:block'>montasimmamun@gmail.com</p>

                    <Link
                        to='https://www.linkedin.com/in/montasim'
                        className='inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-secondary rounded-lg'
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            <div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto'>
                <img
                    src='https://posdash-37746.web.app/static/media/img.8d0b71cd91b0f4627e06.jpg'
                    alt='Montasim at versity'
                    className='absolute inset-0 object-cover w-full h-full'
                />
            </div>
        </aside>
    );
};

export default AboutMe;