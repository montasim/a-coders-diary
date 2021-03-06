import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { toast } from 'react-toastify';

const MyPost = ({ myPost, index }) => {
    const { _id, postName, postDescription, postCategory, postAuthor, postAuthorImg, postDateTime } = myPost;

    const deleteConfirmation = (_id) => {

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

                            <button className='btn btn-info w-36 flex items-center' onClick={() => deletePost(_id)}>
                                <GiConfirmed className='text-2xl mr-4' />
                                Confirm
                            </button>
                        </div>
                    </div>
                );
            }
        });
    };

    const deletePost = (_id) => {
        fetch(`https://a-coders-diary.herokuapp.com/delete-post/${_id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data?.deletedCount === 1) {
                    toast?.success(`Post ${postName} deleted successfully`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                };
            })
            .catch((error) => {
                toast.error(`Error: ${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <tr>
            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
            <th>{index + 1}</th>
            <td>
                <article>
                    <div className="flex items-start p-6">
                        <div className="ml-4">
                            <strong className="font-medium sm:text-lg">
                                <a href="" className="hover:underline"> {postName} </a>
                            </strong>

                            <p className="text-sm text-gray-700 line-clamp-2">
                                {postDescription?.length > 150 ? postDescription.substring(0, 120) + '...' : postDescription}
                            </p>

                            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                    <p className="ml-1 text-xs">{postCategory}</p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                    {postAuthor?.split('@')[0]}
                                </p>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                    {postDateTime?.slice(0, 10)}
                                </p>

                            </div>
                        </div>
                    </div>
                </article>
            </td>
            <td>
                <div className="flex items-center">
                    <Link to={`/dashboard/edit-post/${_id}`}
                        className="z-20 block p-2 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </Link>

                    <button onClick={() => deleteConfirmation(_id)}
                        className="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                        type="button"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr >
    );
};

export default MyPost;