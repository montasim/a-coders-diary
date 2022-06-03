import React, { useEffect, useState } from 'react';
import MyPost from './MyPost';
import Post from './Post';

const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setMyPosts(data));
    }, [myPosts]);

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
                            myPosts?.length === 0 ?
                                <p class="text-center text-info text-xl my-20">Sorry! No post to display. Add post to display here.</p>
                                :
                                myPosts?.map((myPost, index) => <MyPost key={index} myPost={myPost} />)
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

export default MyPosts;