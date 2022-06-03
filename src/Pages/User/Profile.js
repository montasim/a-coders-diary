import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.cjs';
import auth from '../../Hooks/Firebase.Init';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const Profile = () => {
    const { _id } = useParams();
    const [userData, setUserData] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const currentUserEmail = user?.email || user?.user?.email;

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/users/${currentUserEmail}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [currentUserEmail]);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast.error(`${error?.message?.slice(17, -2)}`);
    };

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl m-20 p-6">
            <figure><img src='' alt="Album" /></figure>
            <div class="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h2 class="card-title">Author Name</h2>
                        <p>Author Rank</p>
                    </div>

                    <div class="card-actions justify-end">
                        <button class="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white text-sm border-0">Edit Profile</button>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quidem error quisquam doloribus, hic exercitationem similique necessitatibus placeat mollitia harum recusandae. Fuga ipsam eum doloribus reprehenderit ipsum reiciendis obcaecati natus!</p>
                <div className="flex items-center gap-x-2 mt-4">
                    <button
                        className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                    >
                        <BsGoogle className='text-md' />
                    </button>

                    <button
                        className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                    >
                        <BsGithub className='text-md' />
                    </button>

                    <button
                        className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                    >
                        <BsFacebook className='text-md' />
                    </button>

                    <button
                        className="p-2 text-sm font-medium text-white bg-primary rounded-lg"
                    >
                        <BsTwitter className='text-md' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;