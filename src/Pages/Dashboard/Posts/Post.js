import React from 'react';
import { Link } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

const Post = ({ post }) => {
    const { _id, postName, postDescription, postTags, postCategory, postAuthor, postAuthorImg, postDateTime } = post;

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
            <th>1</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={postAuthorImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='w-74'>
                        <h3 className="font-bold">{postName?.slice(0, 32) + '...'}</h3>
                        <p className="text-sm opacity-50">{postDescription?.length > 60 ? postDescription?.slice(0, 60) : postDescription}</p>
                        <p className='text-sm opacity-80'>Category: {postCategory}</p>
                        <p className='text-xs'>Tags: <span className="badge badge-ghost badge-sm">{postTags}</span></p>
                    </div>
                </div>
            </td>
            <td>
                {postAuthor}
                <br />
                <span className="text-xs">{postDateTime?.slice(0, 10)}</span>
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

export default Post;