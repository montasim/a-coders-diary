import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.cjs';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import auth from '../../Hooks/Firebase.Init';
import defaultUserImage from '../../Assets/Images/defaultUser.png';

const DashboardSummary = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myPosts, setMyPosts] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://a-coders-diary.herokuapp.com/my-posts?postAuthor=${user?.email || user?.user?.email}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => setMyPosts(data));
        }
    }, [user]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/tags')
            .then(res => res.json())
            .then(data => setTags(data));
    }, [tags]);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast.error(`${error?.message?.slice(17, -2)}`);
    };

    return (
        <div className='mx-auto my-8'>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Posts</div>
                    <div className="stat-value text-primary">{myPosts?.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Category</div>
                    <div className="stat-value text-primary">{tags?.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user?.photoURL || user?.user?.photoURL || defaultUserImage} alt='user profile pic' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                </div>

            </div>
        </div>
    );
};

export default DashboardSummary;