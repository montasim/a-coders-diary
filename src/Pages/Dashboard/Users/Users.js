import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Details</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.length === 0 ?
                            <p className="text-center text-info text-xl my-20">Sorry! No user to display.</p>
                            : users?.map((user, index) => <User key={index} user={user} index={index} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Users;