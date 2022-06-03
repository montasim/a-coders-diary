import React from 'react';
import { Link } from 'react-router-dom';

const CreateAdmin = ({ createAdmin, index }) => {
    const { userName, userEmail, userImg, userCreationTime } = createAdmin;

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
                    <button
                        class="z-10 block p-2 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr >
    );
};

export default CreateAdmin;