import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <progress className="progress progress-gradient-to-r from-primary to-secondary w-56 h-2 lg:h-3"></progress>
        </div>
    );
};

export default Loading;