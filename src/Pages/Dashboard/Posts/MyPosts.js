import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.cjs';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';
import auth from '../../../Hooks/Firebase.Init';
import MyPost from './MyPost';

const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://a-coders-diary.herokuapp.com/my-posts?postAuthor=${user.email}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => setMyPosts(data));
        }
    }, [user]);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast.error(`${error?.message?.slice(17, -2)}`);
    };

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPosts?.length === 0 ?
                                <p p className="text-center text-info text-xl my-20">Sorry! No post to display. Add post to display here.</p>
                                :
                                myPosts?.map((myPost, index) => <MyPost key={index} myPost={myPost} index={index} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Serial</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default MyPosts;