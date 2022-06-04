import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Admin = ({ admin, index }) => {
    const { userName, userEmail, userImg, userCreationTime } = admin;

    const removeAdmin = () => {
        fetch(`https://a-coders-diary.herokuapp.com/remove-admin/${userEmail}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount === 1) {
                    toast.success('Admin removed successfully!');
                }
                else {
                    toast.error('Admin remove failed!');
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
                    <button onClick={() => removeAdmin()} class="btn btn-xs btn-primary">Remove Admin</button>
                </div>
            </td>
        </tr >
    );
};

export default Admin;