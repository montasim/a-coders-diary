import React, { useEffect, useState } from 'react';
import Admin from './Admin';

const Admins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, [admins]);

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
                        {admins?.length === 0 ?
                            <p class="text-center text-info text-xl my-20">Sorry! No admin to display. Create admin to display here.</p>
                            : admins?.map((admin, index) => <Admin key={index} admin={admin} index={index} />)
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

export default Admins;