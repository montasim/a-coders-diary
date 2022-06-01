import React, { useState } from 'react';
import auth from '../../Hooks/Firebase.Init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { GiConfirmed } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';

const CreateTag = () => {
    const [user, loading, error] = useAuthState(auth);
    const [tagName, setTagName] = useState('');
    const tagAuthor = user?.user?.email || user?.email;
    const tagDateTime = new Date();

    const tagData = { tagName, postAuthor: tagAuthor, postDateTime: tagDateTime };

    const postConfirmation = event => {
        event.preventDefault();

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='bg-gradient-to-r from-primary to-secondary p-8 text-white rounded-lg w-96'>
                        <h1 className='text-xl mb-4'>Are you sure?</h1>
                        <p>Your tag will be public so be careful before proceed.</p>

                        <div className='flex justify-between mt-8'>
                            <button className='btn btn-info w-36 flex items-center' onClick={onClose}>
                                <ImCancelCircle className='text-2xl mr-4' />
                                Cancel
                            </button>

                            <button className='btn btn-info w-36 flex items-center' onClick={createTag}>
                                <GiConfirmed className='text-2xl mr-4' />
                                Confirm
                            </button>
                        </div>
                    </div>
                );
            }
        });
    };

    const createTag = event => {
        toast.success(`Tag ${tagName} created successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        event.target.reset();
    };

    return (
        <form onSubmit={postConfirmation} className='rounded-xl m-12'>
            <h2 className='mb-12 text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Create a tag here</h2>

            <input onBlur={e => setTagName(e.target.value)} type='text' className='input input-bordered input-md w-full' placeholder='Write tag name here' required></input>

            <div className='flex justify-center items-center'>
                <button type='submit'
                    className="mt-8 px-4 py-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:bg-primary rounded-lg w-full lg:w-64"
                >
                    Create Tag
                </button>
            </div>
        </form>
    );
};

export default CreateTag;