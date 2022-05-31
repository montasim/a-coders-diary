import React from 'react';
import loadingAnimation from '../Assets/GIF/loading.gif';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <img src={loadingAnimation} className='w-40 h-40' alt='' />
        </div>
    );
};

export default Loading;