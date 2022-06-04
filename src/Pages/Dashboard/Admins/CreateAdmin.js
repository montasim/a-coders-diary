import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateAdmin = ({ createAdmin, index }) => {
    const { userName, userEmail, userImg, userCreationTime } = createAdmin;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/create-admin/${userEmail}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount === 1) {
                    toast.success('Admin created successfully!');
                }
                else {
                    toast.error('Admin creation failed!');
                }
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
                    <button onClick={() => makeAdmin()} class="btn btn-xs btn-primary">Make Admin</button>
                </div>
            </td>
        </tr >
    );
};

export default CreateAdmin;