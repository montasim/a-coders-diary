import React, { useState } from 'react';
import auth from '../../Hooks/Firebase.Init';
import { useAuthState } from 'react-firebase-hooks/auth';

const CreateTag = () => {
    const [user, loading, error] = useAuthState(auth);
    const [tagName, setTagName] = useState('');
    const tagAuthor = user?.user?.email || user?.email;
    const tagDateTime = new Date();

    const tagData = { tagName, postAuthor: tagAuthor, postDateTime: tagDateTime };

    const createTag = event => {
        event.preventDefault();

        console.log(tagData);

        event.target.reset();
    };

    return (
        <form onSubmit={createTag} className='rounded-xl m-12'>
            <input onBlur={e => setTagName(e.target.value)} type='text' className='input input-bordered input-md w-full' placeholder='Write tag name here' required></input>

            <div className='flex justify-center items-center'>
                <button type='submit'
                    class="mt-8 px-4 py-4 text-sm font-medium text-white bg-blue-500 rounded-lg w-full lg:w-64"
                >
                    Create Tag
                </button>
            </div>
        </form>
    );
};

export default CreateTag;