import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <User key={index} user={user} index={index} />)
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