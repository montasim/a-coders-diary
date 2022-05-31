import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <progress class="progress progress-primary w-56"></progress>
        </div>
    );
};

export default Loading;