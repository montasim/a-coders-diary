import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8'>
            {
                posts?.length === 0 ?
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-center text-info text-xl">
                            <p>Sorry! No post to display.</p>
                        </div>
                    </div>
                    : posts.map((post, index) => <Post key={index} post={post} />)
            }
        </section >
    );
};

export default Posts;