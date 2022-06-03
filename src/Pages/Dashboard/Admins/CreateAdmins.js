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
                        {
                            createAdmins?.map((createAdmin, index) => <CreateAdmin key={index} createAdmin={createAdmin} index={index} />)
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