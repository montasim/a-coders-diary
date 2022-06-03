import React, { useEffect, useState } from 'react';
import CreateAdmin from './CreateAdmin';

const CreateAdmins = () => {
    const [createAdmins, setCreateAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setCreateAdmins(data));
    }, [createAdmins]);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {createAdmins?.length === 0 ?
                            <p class="text-center text-info text-xl my-20">Sorry! No user to display. Can not create admin if no registered user.</p>
                            : createAdmins?.map((createAdmin, index) => <CreateAdmin key={index} createAdmin={createAdmin} index={index} />)
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

export default CreateAdmins;