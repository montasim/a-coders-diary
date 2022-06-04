import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {
    const { _id, userName, userEmail, userImg, userCreationTime } = user;

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

                            <button className='btn btn-info w-36 flex items-center' onClick={() => deleteUser(_id)}>
                                <GiConfirmed className='text-2xl mr-4' />
                                Confirm
                            </button>
                        </div>
                    </div>
                );
            }
        });
    };

    const deleteUser = (_id) => {
        fetch(`https://a-coders-diary.herokuapp.com/delete-user/${_id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data?.deletedCount === 1) {
                    toast?.success(`User ${userName} deleted successfully`, {
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
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='w-74'>
                        <h3 className="font-bold">{userName}</h3>
                        <p className="text-sm opacity-50"></p>
                        <span className="badge badge-ghost badge-sm">{userCreationTime}</span>
                    </div>
                </div>
            </td>
            <td>
                <br />
                <span className="text-xs">{userEmail}</span>
            </td>
            <td>
                <div className="flex items-center">
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

export default User;